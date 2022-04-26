const button = document.querySelector("button");
const result = document.querySelector("#result");

// button.addEventListener("click", getData);
button.addEventListener("click", postData);

async function postData() {
    const response = await fetchapi.post("/data", { value: "20 cm records" });
    // const response = await doPost("/data", { value: "20 cm records" });
    result.innerText = response.message;
}

async function getData() {
    //  fetch data
    // const response = await doGet("https://swapi.dev/api/planets/1");
    const response = await fetchapi.get("https://swapi.dev/api/planets/1");

    //  initialize list
    let residents = [];
    //  loop through resident URLs
    response.residents.forEach(async (resident) => {
        //  await a single resident
        let current = await getResident(resident);
        //  add to array
        residents.push(current);
    });

    //  do this every 2000 milliseconds:
    let reload = setInterval(() => {
        //  if the number of fetched residents is the number of expected residents
        if (response.residents.length === residents.length) {
            //  ...inject result
            result.innerHTML = residents.join("");
            //  and clear timer
            clearInterval(reload);
        }
    }, 2000);
}

//  the resident fetching function
async function getResident(url) {
    const response = await doGet(url);
    return `<li>${response.name}</li>`;
}

// const fetchapi = {
//     get: async function (url) {
//         const request = await fetch(url);
//         try {
//             return await request.json();
//         } catch (error) {
//             console.error(error);
//         }
//     },
//     post: async function (url, data) {
//         const request = await fetch(url, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         });
//         try {
//             return await request.json();
//         } catch (error) {
//             console.error(error);
//         }
//     },
//     put: async function (url, data) {
//         const request = await fetch(url, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//         });
//         try {
//             return await request.json();
//         } catch (error) {
//             console.error(error);
//         }
//     },
//     delete: async function (url) {
//         const request = await fetch(url, {
//             method: "DELETE",
//             headers: { "Content-Type": "application/json" },
//         });
//         try {
//             return await request.json();
//         } catch (error) {
//             console.error(error);
//         }
//     },
// }

//  the actual fetching function
async function doGet(url) {
    const request = await fetch(url);
    try {
        return await request.json();
    } catch (error) {
        console.error(error);
    }
}

async function doPost(url, data) {
    //  { value: "ceva" }
    const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    try {
        return await request.json();
    } catch (error) {
        console.error(error);
    }
}

//  alternative
// function doGet(url) {
//     let output;
//     fetch(url)
//         .then((data) => data.json())
//         .then((data) => {
//             output = data;
//         })
//         .catch((error) => console.error(error));
//     return output;
// }
