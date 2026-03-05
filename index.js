let des = document.getElementById('des').getContext('2d')
let res = document.getElementById('res')

let estrada = new Estrada(20, 345, 40, 10, 'yellow')
let estrada2 = new Estrada(80, 345, 40, 10, 'yellow')
let estrada3 = new Estrada(140, 345, 40, 10, 'yellow')
let estrada4 = new Estrada(200, 345, 40, 10, 'yellow')
let estrada5 = new Estrada(260, 345, 40, 10, 'yellow')
let estrada6 = new Estrada(320, 345, 40, 10, 'yellow')
let estrada7 = new Estrada(380, 345, 40, 10, 'yellow')
let estrada8 = new Estrada(440, 345, 40, 10, 'yellow')
let estrada9 = new Estrada(500, 345, 40, 10, 'yellow')
let estrada10 = new Estrada(560, 345, 40, 10, 'yellow')
let estrada11 = new Estrada(620, 345, 40, 10, 'yellow')
let estrada12 = new Estrada(680, 345, 40, 10, 'yellow')
let estrada13 = new Estrada(740, 345, 40, 10, 'yellow')
let estrada14 = new Estrada(800, 345, 40, 10, 'yellow')
let estrada15 = new Estrada(860, 345, 40, 10, 'yellow')
let estrada16 = new Estrada(920, 345, 40, 10, 'yellow')
let estrada17 = new Estrada(980, 345, 40, 10, 'yellow')
let estrada18 = new Estrada(1040, 345, 40, 10, 'yellow')
let estrada19 = new Estrada(1100, 345, 40, 10, 'yellow')
let estrada20 = new Estrada(1160, 345, 40, 10, 'yellow')
let estrada21 = new Estrada(1220, 345, 40, 10, 'yellow')
let estrada22 = new Estrada(1280, 345, 40, 10, 'yellow')
let estrada23 = new Estrada(1340, 345, 40, 10, 'yellow')
let estrada24 = new Estrada(1400, 345, 40, 10, 'yellow')
let carroInimigo = new CarroInimigo(1300, 125, 50, 50, 'darkgreen')
let carroInimigo2 = new CarroInimigo(1300, 225, 50, 50, 'pink')
let carroInimigo3 = new CarroInimigo(1300, 525, 50, 50, 'orange')
let medidaCarro = new Carro(100, 270, 85, 60, 'gray')

let carro = new Carro(100, 325, 50, 50, 'blue')

document.addEventListener('keydown', (e) => {
    console.log(e)
    if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dir -= 10
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dir += 10
    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'w' || e.key === 'ArrowUp') {
        carro.dir = 0
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dir = 0
    }
})

function colisao() {
    if (carro.colid(carroInimigo)) {
        carro.vida -= 1
        carroInimigo.recomeca()
    }
    if (carro.colid(carroInimigo2)) {
        carro.vida -= 1
        carroInimigo2.recomeca()

    }
    if (carro.colid(carroInimigo3)) {
        carro.vida -= 1
        carroInimigo3.recomeca()
    }
    console.log('Vida ',carro.vida)
    res.innerHTML = carro.vida
}

function pontuacao(){
    if(carro.point(carroInimigo)){
        carro.pontos += 5        
    }
    if(carro.point(carroInimigo2)){
        carro.pontos += 5
    }
    if(carro.point(carroInimigo3)){
        carro.pontos += 5
    }
    console.log('pontos: ',carro.pontos)
    res.innerHTML = carro.pontos
}


function desenha() {
    estrada.des_quad()
    estrada2.des_quad()
    estrada3.des_quad()
    estrada4.des_quad()
    estrada5.des_quad()
    estrada6.des_quad()
    estrada7.des_quad()
    estrada8.des_quad()
    estrada9.des_quad()
    estrada10.des_quad()
    estrada11.des_quad()
    estrada12.des_quad()
    estrada13.des_quad()
    estrada14.des_quad()
    estrada15.des_quad()
    estrada16.des_quad()
    estrada17.des_quad()
    estrada18.des_quad()
    estrada19.des_quad()
    estrada20.des_quad()
    estrada21.des_quad()
    estrada22.des_quad()
    estrada23.des_quad()
    estrada24.des_quad()
    carro.des_carro()
    carroInimigo2.des_carro()
    carroInimigo3.des_carro()
    carroInimigo.des_carro()
    // medidaCarro.des_quad()

}

function atualiza() {
    estrada.mov_est()
    estrada2.mov_est()
    estrada3.mov_est()
    estrada4.mov_est()
    estrada5.mov_est()
    estrada6.mov_est()
    estrada7.mov_est()
    estrada8.mov_est()
    estrada9.mov_est()
    estrada10.mov_est()
    estrada11.mov_est()
    estrada12.mov_est()
    estrada13.mov_est()
    estrada14.mov_est()
    estrada15.mov_est()
    estrada16.mov_est()
    estrada17.mov_est()
    estrada18.mov_est()
    estrada19.mov_est()
    estrada20.mov_est()
    estrada21.mov_est()
    estrada22.mov_est()
    estrada23.mov_est()
    estrada24.mov_est()
    carro.mov_car()
    carroInimigo.mov_car()
    carroInimigo2.mov_car()
    carroInimigo3.mov_car()
    // medidaCarro.mov_car()
    pontuacao()
    colisao()

}

function main() {
    des.clearRect(0, 0, 1200, 700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()