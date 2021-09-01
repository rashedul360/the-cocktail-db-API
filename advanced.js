/* 
  1. keys
  2. value
  3. values and keys with others
  4. different way to declear an object
  5. delete an object property
  6. ডিলিট করতে চাইলেও পারবেনা ও অ্যাড করতে চাইলেও পারবেনা এটা করে দেখাও । Object এ।
  7. loop through inside an object ` [] এটা দিয়েও করবে `
  8. you have a function which is inside an object. this function you use the another object (আর ৩ টা মেথড আছে সেগুলা  ও কর )
  9.compare object
*/

/*================================================================== 
                                practice day
=================================================================*/
/* 
1. declear an object, property string, boolen, number, object
2.template string maximu 3 prpperty will dynamic,(nested object property, )
3.1. no parameter arrow function
3.2. single parameter arrow function  / 7
3.3 2 parameter 1st +1 + 2nd+7  and then return result
4. map an array and divide element / 7
5. forEach ,filter, find 
6. destructaring with array and object (array var second,) 
7. JSON placeholder photos api use display photo, and click to details des with photo.
8. JSON use forEach()
9. go to thecocktail db and use API
10. falsy truthu, ==,===
11.
*/

const error = document.getElementById("error");
const learnMoreContainer = document.getElementById("learn-more");
const drinksList = () => {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;
  inputField.value = "";
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
  if (inputText === "") {
    error.innerHTML = "please write something";
  } else {
    error.innerHTML = "";
    fetch(url)
      .then((res) => res.json())
      .then((json) => displayDrinks(json.drinks))
      .catch(() => {
        error.innerHTML = `
        <p style="text-align:center">your search <span style="font-size:20px;font-weight:bold">${inputText} </span> not found .</p>
        <p style="text-align:center">notes: dear Sir/Mam please check your internet connection, </p>
        `;
        error.classList.add("styles");
        learnMoreContainer.innerHTML = "";
      });
  }
};
const displayDrinks = (drinks) => {
  // console.log(drinks);
  const photoAdder = document.getElementById("photoAdder");
  photoAdder.innerHTML = "";
  drinks.forEach((drink) => {
    console.log(drink);
    const div = document.createElement("div");
    div.classList.add("styles");
    div.innerHTML = `
    <h3>${drink.strDrink}</h3>
    <img src="${drink.strDrinkThumb}"/>
    <button onclick="learnMore('${drink.idDrink}')">learn more</button>
    `;
    error.classList.remove("styles");
    photoAdder.appendChild(div);
    learnMoreContainer.innerHTML = "";
  });
};
const learnMore = (drinkId) => {
  // console.log(drinkId);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => learnMoreDisplay(data.drinks));
};

const learnMoreDisplay = (drinks) => {
  console.log(drinks);

  learnMoreContainer.innerHTML = "";
  drinks.forEach((drink) => {
    const div = document.createElement("div");
    div.classList.add("styles");
    div.innerHTML = `
    <h2>${drink.strIngredient2}</h2>
    <h3>description:${drink.strInstructions}</h3>
    <img src="${drink.strDrinkThumb}"/>
    `;
    learnMoreContainer.appendChild(div);
  });
};
