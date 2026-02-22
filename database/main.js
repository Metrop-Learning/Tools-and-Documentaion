import data from "https://metrop-learning.github.io/Metrop/country/boundary.json" with { type: "json" };


document.getElementById("databaseTable").innerHTML = "<thead><tr><th>#</th><th>ID</th><th>Element</th><th>Name EN</th><th>Name FR</th><th>Flag</th><th>Population</th><th>Content</th></tr></thead>"
let countLV1 = 0
for(let element in data){
    countLV1++
    const continentDIV = document.createElement("tr")
    continentDIV.innerHTML = `<td>${countLV1}</td><td>${element}</td><td>${element == "WD" ? "World" : "Continent"}</td><td>${data[element].nameen ?? "N/A"}</td><td>${data[element].namefr ?? "N/A"}</td><td>${data[element].flag ? ('<img src="' + data[element].flag + '">') : "N/A"}</td><td>${data[element].population ?? "N/A"}</td><td>${data[element].content ?? "N/A"}</td>`
    document.getElementById("databaseTable").appendChild(continentDIV)
    for(let el_c in data[element].get){
        countLV1++
        const continentDIV = document.createElement("tr")
        continentDIV.innerHTML = `<td>${countLV1}</td><td>${element + "-" + el_c}</td><td>${el_c == "IMN" || el_c == "JEY" || el_c == "GGY" ? "Crown Dependencies" : "Country"}</td><td>${data[element].get[el_c].nameen ?? "N/A"}</td><td>${data[element].get[el_c].namefr ?? "N/A"}</td><td>${data[element].get[el_c].flag ? ('<img src="' + data[element].get[el_c].flag + '">') : "N/A"}</td><td>${data[element].get[el_c].population ?? "N/A"}</td><td>${data[element].get[el_c].content ?? "N/A"}</td>`
        document.getElementById("databaseTable").appendChild(continentDIV)
        for(let el_sub in data[element].get[el_c].get){
            countLV1++
            const continentDIV = document.createElement("tr")
            continentDIV.innerHTML = `<td>${countLV1}</td><td>${element + "-" + el_c + "-" + el_sub}</td><td>${el_c == "FRA" ? "Region" : el_c == "USA" || el_c == "DEU" ? "States" : "Subdivision"}</td><td>${data[element].get[el_c].get[el_sub].nameen ?? "N/A"}</td><td>${data[element].get[el_c].get[el_sub].namefr ?? "N/A"}</td><td>${data[element].get[el_c].get[el_sub].flag ? ('<img src="' + data[element].get[el_c].get[el_sub].flag + '">') : "N/A"}</td><td>${data[element].get[el_c].get[el_sub].population ?? "N/A"}</td><td>${data[element].get[el_c].get[el_sub].content ?? "N/A"}</td>`
            document.getElementById("databaseTable").appendChild(continentDIV)
            for(let el_subsub in data[element].get[el_c].get[el_sub].get){
                countLV1++
                const continentDIV = document.createElement("tr")
                continentDIV.innerHTML = `<td>${countLV1}</td><td>${element + "-" + el_c + "-" + el_sub + "-" + el_subsub}</td><td>${el_c == "FRA" ? "Departement" : "Sub-Subdivision"}</td><td>${data[element].get[el_c].get[el_sub].get[el_subsub].nameen ?? "N/A"}</td><td>${data[element].get[el_c].get[el_sub].get[el_subsub].namefr ?? "N/A"}</td><td>${data[element].get[el_c].get[el_sub].get[el_subsub].flag ? ('<img src="' + data[element].get[el_c].get[el_sub].get[el_subsub].flag + '">') : "N/A"}</td><td>${data[element].get[el_c].get[el_sub].get[el_subsub].population ?? "N/A"}</td><td>${data[element].get[el_c].get[el_sub].get[el_subsub].content ?? "N/A"}</td>`
                document.getElementById("databaseTable").appendChild(continentDIV)
            }
        }
    }
}