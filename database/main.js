import data from "https://metrop-learning.github.io/Metrop/country/boundary.json" with { type: "json" };


document.getElementById("databaseTable").innerHTML = "<thead><tr><th>#</th><th>ID</th><th>Element</th><th>Name EN</th><th>Name FR</th><th>Flag</th><th>Population</th><th>Content</th></tr></thead>"
let countLV1 = 0
for(let element in data){
    countLV1++
    const continentDIV = document.createElement("tr")
    continentDIV.innerHTML = `<td>${countLV1}</td><td>${element}</td><td>Continent</td><td>${data[element].nameen ?? "N/A"}</td><td>${data[element].namefr ?? "N/A"}</td><td><img src="${data[element].flag ?? ""}" alt="N/A"></td><td>${data[element].population ?? "N/A"}</td><td>${data[element].content ?? "N/A"}</td>`
    document.getElementById("databaseTable").appendChild(continentDIV)
}