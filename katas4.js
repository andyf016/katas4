const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function write2Dom(value, location) {
    var newElement = document.createElement("div");

    var newText = document.createTextNode(value);
    newElement.appendChild(newText);

    var destination = document.getElementById(location);
    destination.appendChild(newElement);
}

//I used .join(', ') in a few katas to make the final output to the page more readable

function katas1(){
let cities = gotCitiesCSV.split(',').join(', ')
return cities 
}
write2Dom(katas1(), "d1")

function katas2(){
    let sent = bestThing.split(' ').join(' ')
    return sent
}
write2Dom(katas2(), "d2")

function katas3(){
let cities = gotCitiesCSV.split(',').join('; ')  
return cities 
}
write2Dom(katas3(), "d3")

function katas4(){
    let cities = lotrCitiesArray.join(', ')
    return cities
}
write2Dom(katas4(), "d4")

function katas5(){
    let cities = lotrCitiesArray.slice(0,5).join(', ')
    return cities
}
write2Dom(katas5(), "d5")

function katas6(){
    let cities = lotrCitiesArray.slice(2,7).join(', ')
    return cities
}
write2Dom(katas6(), "d6")

function katas7(){
    let cities = lotrCitiesArray.slice(2,5).join(', ')
    return cities
}
write2Dom(katas7(), "d7")

function katas8(){
    lotrCitiesArray.splice(2,1)
    return lotrCitiesArray.join(', ')
}
write2Dom(katas8(), "d8")

function katas9(){
    lotrCitiesArray.splice(5,2)
    return lotrCitiesArray.join(', ')
}
write2Dom(katas9(), "d9")

function katas10(){
    lotrCitiesArray.splice(2,0, 'Rohan')
    return lotrCitiesArray.join(', ')
}
write2Dom(katas10(), "d10")

function katas11(){
    lotrCitiesArray.splice(5,1,'Deadest Marshes')
    return lotrCitiesArray.join(', ')
}
write2Dom(katas11(), "d11")

function katas12(){
    let byABit = bestThing.slice(0,14)
    return byABit
}
write2Dom(katas12(), "d12")

function katas13(){
    let byABit = bestThing.slice(68)  
    return byABit 
}
write2Dom(katas13(), "d13")

function katas14(){
    let byABit = bestThing.slice(23, 38)
    return byABit
}
write2Dom(katas14(), "d14")

function katas15(){
    let byABit = bestThing.substring(68)
    return byABit
}
write2Dom(katas15(), "d15")

function katas16(){
    let byABit = bestThing.substring(23, 38)
    return byABit
}
write2Dom(katas16(), "d16")

function katas17(){
    lotrCitiesArray.pop()
    return lotrCitiesArray.join(', ')
}
write2Dom(katas17(), "d17")

function katas18(){
   lotrCitiesArray.push('Deadest Marshes')
    return lotrCitiesArray.join(', ')
}
write2Dom(katas18(), "d18")

function katas19(){
   lotrCitiesArray.shift()
   return lotrCitiesArray.join(', ')
}
write2Dom(katas19(), "d19")

function katas20(){
    lotrCitiesArray.unshift('Mordor')
    return lotrCitiesArray.join(', ')
}
write2Dom(katas20(), "d20")