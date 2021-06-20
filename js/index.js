const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select")

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults);
}

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
          const country = user.location.country;
          const name = user.name.first;
          const imageUrl = user.picture.medium;
          //console.log(country, name, imageURL);
          let userDiv = document.createElement("div");
          userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
            `;
            randomFolks.append(userDiv);
      }

      
}

// getData();


selectUserNumber.addEventListener("change", function (e) {
    let numUsers = e.target.value;
    getData(numUsers);
});

getData(1);
