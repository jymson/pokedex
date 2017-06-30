var pokemonImgArr =[];
var api = 'http://pokeapi.co/api/v2/pokemon/';
var imgApi = 'http://pokeapi.co/media/img/';

$(document).ready(function(){

  for(var i = 1; i <= 151; i++){
      $('.pokemon').append('<img id =\'' + i + '\' src="http://pokeapi.co/media/img/' + i + '.png">');
      pokemonImgArr.push(imgApi + i + '.png');
  };
    
    $(document).on("click", "img", function(){
        var html = '';
        var pokemonId = $(this).attr("id");
        var pokemonAPI = api+pokemonId;
        var pokemonInfo;
        
        
        // Get individual pokemon info
        $.get(pokemonAPI, function(data){
          pokemonInfo = {
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types
          };
          
          types = pokemonInfo.types.map(function(type) {
            return '<li>' + type["type"]["name"]; + '</li>'
          })
          console.log(types)
          html += '<div>'
          html += '<h1>'+ pokemonInfo.name + '</h1>'
          html += '<img src="' + pokemonImgArr[pokemonId-1] + '">'
          html += '<h3>Types:</h3>'
          html += '<ul>'+ types +'</ul>'
          html += '<h3>Weight:</h3>'
          html += '<ul>'+ pokemonInfo.weight +'</ul>'
          html += '<h3>Height:</h3>'
          html += '<ul>'+ pokemonInfo.height +'</ul>'
          html += '</div>'
        
          $(".pokedex").html(html);
        })
    })
})
