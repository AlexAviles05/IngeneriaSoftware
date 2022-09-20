function load()
{
    let Html_name= '';
    var count = 1;
    var aux = 0;

    while(count <= 10)
    {
      aux = Math.floor(Math.random()*(100 - 1) + count)
      let URL = "https://pokeapi.co/api/v2/pokemon/"+aux;
      let URL_cont = 'https://pokeapi.co/api/v2/characteristic/'+aux;
      
      fetch(URL)
      .then((result) => result.json())
      .then((data) => 
    {      
      Html_name += '<div class="accordion-item"> <h2 class="accordion-header" id="headingTwo"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">'+ data.name+'</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"> <div class="accordion-body"><img src="'+data.sprites.front_default+'" alt=""><strong>'+data.name+'.</strong><br>Form: '+data.forms.name+'<br>Specie: '+data.species.name+'<br>Type: '+data.types.name+' <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima odio dignissimos deserunt quisquam, ad natus nihil iste explicabo hic tenetur, fuga blanditiis officiis voluptatem eum neque. Omnis, aspernatur tenetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima odio dignissimos deserunt quisquam, ad natus nihil iste explicabo hic tenetur, fuga blanditiis officiis voluptatem eum neque. Omnis, aspernatur tenetur.</div></div></div>';           
      document.getElementById("pokemon").innerHTML = Html_name;   
    }).catch((err) => console.log(err));     
    count++; 
  }          
   
    
}

function type()
{  
  let URL = "https://pokeapi.co/api/v2/type/"
  let Html_option='<option selected  name="species">Type</option>'

  fetch(URL)
  .then((result) => result.json())
  .then((data) =>
  {
    data.results.forEach(type => {          
      Html_option += '\n<option id="type" value='+type.name+'>'+type.name+'</option>'         
      document.getElementById("species").innerHTML = Html_option 
    });        
  }
  )
}

function search()
{
  var name = document.getElementById('floatingInput').value;
  var type = document.getElementById('species').value

  let URL = "https://pokeapi.co/api/v2/pokemon/"+name;
  let Html_name = ''

  if(name != "" || type == "Type")
  {
    fetch(URL)
    .then((result) => result.json())
    .then((data) =>
    {      
      Html_name += '<div class="accordion-item"> <h2 class="accordion-header" id="headingTwo"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">'+ data.name+'</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"> <div class="accordion-body"><img src="'+data.sprites.front_default+'" alt=""><strong>'+data.name+'.</strong><br>Form: '+data.forms.name+'<br>Specie: '+data.species.name+'<br>Type: '+data.types.name+' <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima odio dignissimos deserunt quisquam, ad natus nihil iste explicabo hic tenetur, fuga blanditiis officiis voluptatem eum neque. Omnis, aspernatur tenetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima odio dignissimos deserunt quisquam, ad natus nihil iste explicabo hic tenetur, fuga blanditiis officiis voluptatem eum neque. Omnis, aspernatur tenetur.</div></div></div>';           
      document.getElementById("pokemon").innerHTML = Html_name;      
            
      window.onload = () =>
      {
        location.reload();        
      }
    })
  }

  if(name == "" || type != "Type")
  {
    console.log(type);
    let URL = "https://pokeapi.co/api/v2/type/"+type;
    

    let Html_name = ''
    console.log(URL);
    fetch(URL)
    .then((result) => result.json())
    .then((data) =>
    { 
      console.log(data.pokemon)
      data.pokemon.forEach(pokemon => {
        let URL_pokemon = "https://pokeapi.co/api/v2/pokemon/" + pokemon.pokemon.name;
        fetch(URL_pokemon)
        .then((result) => result.json())
        .then((data) =>{
          Html_name += '<div class="accordion-item"> <h2 class="accordion-header" id="headingTwo"> <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">'+ data.name+'</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"> <div class="accordion-body"><img src="'+data.sprites.front_default+'" alt=""><strong>'+data.name+'.</strong><br>Form: '+data.forms.name+'<br>Specie: '+data.species.name+'<br>Type: '+data.types.name+' <br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima odio dignissimos deserunt quisquam, ad natus nihil iste explicabo hic tenetur, fuga blanditiis officiis voluptatem eum neque. Omnis, aspernatur tenetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam minima odio dignissimos deserunt quisquam, ad natus nihil iste explicabo hic tenetur, fuga blanditiis officiis voluptatem eum neque. Omnis, aspernatur tenetur.</div></div></div>';           
          document.getElementById("pokemon").innerHTML = Html_name;  
        })            
      })
      window.onload = () =>
      {
        location.reload();        
      }
    })
  } 
}
load();
type();