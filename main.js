var pokemonImgArr =[];
var api = 'http://pokeapi.co/api/v2/pokemon/';
var imgApi = 'http://pokeapi.co/media/img/';

$(document).ready(function(){

  //1. Append pokemon images
  for(var i = 1; i <= 151; i++){
      $('.pokemon').append('<img id =\'' + i + '\' src="http://pokeapi.co/media/img/' + i + '.png">');
      pokemonImgArr.push(imgApi + i + '.png');
  };
  
  //2. Onclick, show pokemon details
  $(document).on("click", "img", function(){
    
      // 2a. set variables
      var html = '';
      var pokemonId = $(this).attr("id");
      var pokemonAPI = api+pokemonId;
      var pokemonInfo;
      
      
      // 2b. Get individual pokemon info by making ajax call
      $.get(pokemonAPI, function(data){
        
        //2c. input data into pokemonInfo object
        pokemonInfo = {
          name: data.name,
          height: data.height,
          weight: data.weight,
          types: data.types
        };
        
        // 2d. iterate thru array of Types objects and return new array of li strings with name, using Array.prototype.map function
        types = pokemonInfo.types.map(function(type) {
          return '<li>' + type["type"]["name"]; + '</li>'
        })
        
        // Create HTML string
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
      
        // Insert HTML string in pokedex element
        $(".pokedex").html(html);
      })
  })
})
