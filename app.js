const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
     .then (data => displayFoods(data.meals))
    .catch(error => displayError("Something went wrong ! Please try again later!"));
}

const displayFoods = foods => {
    const foodItems = document.getElementById('food-items');
    let foodHtml = "";
     foods.forEach(food => {
     
        foodHtml = foodHtml+ `
            <div class="col-md-3" id="food-box" onclick="getIngredient('${food.strIngredient}')">
                <img  src="${food.strMealThumb}">
                
                <h3 class="food-name" id="food-name">${food.strMeal}</h3>
            </div>`;
    foodItems.innerHTML = foodHtml;
    })
}
const getIngredient = ingredients => {
    console.log();
}









const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}

                 