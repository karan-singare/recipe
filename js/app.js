/**
 * Fetching the recipe data from the api using ajax
 */
 var data;
 data =  fetch('http://starlord.hackerearth.com/recipe').then(function(response) {
   return response.text()
 }).then(function(text) {
   var data, recipesContainer, recipes, DOMstrings;
   // the data recieve from the API is stored in data
   data = JSON.parse(text);

   DOMstrings = {
      recipe: '.recipe',
      recipesContainer: '.recipe-container'
   }
   // Function to create the recipe
   var createRecipe = function(data) {
      var recipe =   `<div class="recipe" id="${data.id}">
                         <h3 class="recipe__name">${data.name}</h3>
                         <div class="recipe__category">${data.category}</div>
                         <div class="recipe__label">${data.label}</div>
                         <div class="recipe__price">$${data.price}</div>
                         <div class="recipe__description">${data.description}</div>
                         <div class="recipe__buttons">
                           <a href="page.html" target="_blank" class="btn">view more</a>
                           <a href="page.html" target="_blank" class="btn">quick view</a>
                         </div>
                     </div>`;
      return recipe;
   }

   // Displaying the data in the UI
   recipesContainer = document.querySelector(DOMstrings.recipesContainer);;

   console.log(recipesContainer);

   for (var i = 0; i < data.length; i++) {
      var recipe = createRecipe(data[i]);
      recipesContainer.insertAdjacentHTML('beforeend', recipe);
   }

   // Manually Changing the images for the recipes
   recipes = Array.from($(DOMstrings.recipe));
   console.log(recipes);
   recipes.forEach((item, i) => {
      console.log(item);
      // $(item).css({
      //    background: 'red'
      // });
      $(item).css({
         "background-image": `linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.99)), url(../images/Img${i}.jpg)`
      });
   });





 })
