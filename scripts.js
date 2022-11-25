const posiciona =({x,y})=>console.log(x,y)

const tab = document.getElementById('tabuleiro')
for (let i = 0; i<8; i++){
    for (let j = 0; j<8; j++){
    const d = document.createElement('button')
    d.setAttribute('type','button')
    d.setAttribute('id',`casa${i*8+j}`)
    d.setAttribute('data-x', i)
    d.setAttribute('data-y', j)
    const color = (i+j) %2 === 0 ? 'black' : 'white'
    d.setAttribute('class',`casa ${color}`)
    d.addEventListener('click', () => {
        posiciona(d.dataset) 
    })
    tab.appendChild(d)
    }
}