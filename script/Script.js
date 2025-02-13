let container = document.querySelector('.container');
let button = document.querySelector('#spin');
let number = Math.ceil(Math.random() * 1000);


button.addEventListener("click", () => {
    container.style.transform = `rotate(${number}deg)`
    number += Math.ceil(Math.random() * 1000)
})


function openAndCloseSaintModal(santo) {
    let santoEmQuestao = document.querySelector(`.${santo}`)
    console.log(santoEmQuestao);
    if(santoEmQuestao.classList.contains('none')){
        santoEmQuestao.classList.remove('none')
    } else {
        santoEmQuestao.classList.add('none')
    }

}