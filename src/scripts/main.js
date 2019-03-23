// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.


const jumpStop = []
const chatten = []
const polar = []

const funkArtist = (fName, fAge) => {
    return {
        "name": fName, 
        "age": fAge
    }
}

const rapArtist = (rName, rAge) => {
    return {
        "name": rName, 
        "age": rAge
    }
}

const countryArtist = (cName, cAge) => {
    return {
        "name": cName,
        "age": cAge
    }
}
const bluegrassArtist = (bgName, bgAge) => {
    return {
        "name": bgName,
        "age": bgAge
    }
}

const popArtist = (pName, pAge) => {
    return {
        "name": pName,
        "age": pAge
    }
}

// Jumpstop: Funk and rap

jumpStop.push(funkArtist("Dre Funkz", "25 years old"), rapArtist("Dusta Grimes", "21 years old"), rapArtist("Loyonce Branis", "27 years old"))

console.log(jumpStop)

// Chatten: Country and bluegrass
chatten.push(countryArtist("Bruce Atikins", "23 years old"), bluegrassArtist("Bartholomew Danielson", "23 years old"), countryArtist("Avilee Dallas", "19 years old"))

console.log(chatten)
// Polar: Pop
polar.push(popArtist("Jensen Brown", "20 years old"), popArtist("Austin Kinkaid", "22 years old"))

console.log(polar)

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

