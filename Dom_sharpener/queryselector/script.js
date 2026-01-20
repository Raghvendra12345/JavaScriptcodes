const leftt = document.querySelector("#main-heading")

leftt.style.textAlign = 'right'

const bass = document.querySelector("#basket-heading")
bass.style.color = 'brown'

const fruu = document.querySelector(".fruits")
fruu.style.backgroundColor = 'grey'

fruu.style.margin = "10px"
fruu.style.padding = '30px'
fruu.style.borderRadius="8px"


const fru=document.querySelectorAll(".fruit")

for (let i = 0; i < fru.length; i++){
    fru[i].style.backgroundColor="white"
    fru[i].style.borderRadius = "6px"
    fru[i].style.margin = "5px"
    fru[i].style.padding="10px"
}

for (let i = 0; i < fru.length; i++){
    if (i % 2 != 0) {
        fru[i].style.backgroundColor = 'brown'
        fru[i].style.color='white'
    }
}


document.querySelector('ul').style.listStyleType='none'