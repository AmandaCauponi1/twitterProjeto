const menu = [
    {
        id: 1,
        img: './icons/Choquei.jpg',
        user: 'CHOQUEI',
        verificado: './icons/icons8-verified-badge-48.png',
        username: 'choquei - 1d',
        info: '🚨BRASIL: Preço da picanha cai 2,7% em 2023 e especialistas afirmam que deve cair ainda mais até o fim do ano.',
        img2: './icons/picanha.jpg',
        heart:'./icons/coracao-branco.svg',
    },
    {
        id: 2,
        img: './icons/crRnyinU_400x400.jpg',
        user:' exercite o cérebro e fortaleça as ideias',
        verificado: './icons/icons8-verified-badge-48.png',
        username: 'diojorang - 6h',
        info: 'pouco se fala sobre a NECESSIDADE de fazerem um filme solo do burro.',
        img2: './icons/FvoRAfVWIAUo_2Q.jpg',
        heart:'./icons/coracao-branco.svg',
    },
    {
        id: 3,
        img: './icons/luscas.jpg',
        user:'luscas TM',
        verificado: './icons/icons8-verified-badge-48.png',
        username: 'luscas - 17h',
        info: 'andy samberg vc nao tinha esse direito.',
        img2: './icons/jake.jpg',
        heart:'./icons/coracao-branco.svg',
    },
];

const boxContent = document.querySelector('.box-content')
// alert('ola')
const btn1 = document.getElementById('btn1')
const span = document.getElementById('close')
const myModal = document.getElementById('myModal') 

console.log(span)
console.log(myModal)
console.log(btn1)
displayMenuItem(menu)
DisplayModal()



const likes = document.querySelectorAll('.heart')
likes.forEach((heart) => {
    heart.addEventListener('click', (e) => {
        let style = e.currentTarget.classList
        if(style.contains('desativado')){
            heart.setAttribute('src', '/icons/coracao-vermelho.svg')
            heart.classList = 'like ativado'
    }
    else{
        heart.setAttribute('src', '/icons/coracao-branco.svg')
        heart.classList = 'like desativado'
    }
    })
})  

// window.addEventListener('DOMContentLoaded', function(){
//     myModal.style.display = 'none';
// })

function displayMenuItem(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="content">
        <img src=${item.img} alt="">
        <div class="info">
            <div class="info1">
                <span>${item.user}</span>
                <img src="${item.verificado}" alt="">
                <p>@${item.username}</p>
                
            </div>
            <p class="info2">${item.info}</p>
        </div>
    </article>
    <article class="content2">
        
        <div class="box-video">
            <img class="video" controls="controls" 
                src=${item.img2} type="video/mp4">
        </div>
        <div class='interactions'>
            <abbr title="comentar">
            <div class="coments">
               
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                      </svg>
                    <p>1.111</p>
               
            </div>
        </abbr>

            <abbr title="Retweetar">
                <div class="retwets">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
                        <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
                      </svg>
                    <p>96</p>
                </div>
            </abbr>

            <abbr title="Curtir">
                <div class="like">
                   <img class="heart desativado" src=${item.heart} alt="">
                    <p>10k</p>
                </div>
            </abbr>


            <abbr title="Ver">
                <div class="graphcs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                      </svg>
                    <p>12,3 mil</p>
                </div>
            </abbr>


            <abbr title="Compartilhar">
                <div class="share">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                      </svg>
                </div>
            </abbr>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join('')
    boxContent.innerHTML = displayMenu
    // console.log(displayMenu)
}

function DisplayModal(){
    btn1.addEventListener('click', () => {
        myModal.style.display = 'flex';
    })
    span.addEventListener('click', () => {
        myModal.style.display = 'none';
    })
}




