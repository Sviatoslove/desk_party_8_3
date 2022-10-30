const board = document.querySelector('#board')
let colors = ['#ffd70000', '#ffd7001a', '#ffd70036', '#ffd7004d', '#ffd70063', '#ffd70080', '#ffd7009e', '#ffd700ba', '#ffd700d1', '#ffd700e6', '#ffd700fa', "#ffd700", "#d5c328", "#a0963e", "#767144", "#827e5f", "#8c8973", '#8e8c80', '#afaea6', '#d3d2cb', '#efeeea', '#ffffff', '#f5ede2', '#ecdcc7', '#f0d6b4', '#f5d09e', '#f4c689', '#f5bf78', '#f3b767', '#f2ae54', '#f3a742', '#ef9c2f', '#ef9c2f', '#ef941c', '#f3900f', '#ff9000', '#ff9002e3', '#ff9002c9', '#ff9002ad', '#ff90028f', '#ff900278', '#ff90025e', '#ff900247', '#ff900233', '#ff900221', '#ff90020d', '#ff900200', '#64398b17', '#64398b36', '#64398b4f', '#64398b70', '#64398b87', '#64398b9e', '#64398bb5', '#64398bcc', '#64398be3', '#64398bf5', '#64398b', '#6d399d', '#7235ab', '#752fb6', '#7c2ac8', '#7f23d4', '#7f17df', '#7f0de8', '#8206f5', '#8400ff', '#7906df', '#6606bb', '#5a0aa1', '#4f0f88', '#4c1a79', '#4e2375', '#562f78', '#613e80', '#6a4b86', '#704c90', '#694f80', '#614f71', '#74697e', '#76717a', '#737275', '#5a5a5a', '#393737', '#201f1f', '#100f0f', '#0e0e0e', '#000000'];
const SQUARES_NUMBER = 1000

for(let i = 0; i < SQUARES_NUMBER; i++){
 const square = document.createElement('div')
 square.classList.add('square')

 square.addEventListener('mouseover', () => setColor(square))
 square.addEventListener('mouseleave', () => removedColor(square))

 board.append(square)
};

const setColor = elem => {
 const color = getRandomColor()
 elem.style.backgroundColor = color
 elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removedColor = elem => {
 elem.style.backgroundColor = '#1d1d1d'
 elem.style.boxShadow = `0 0 2px #000`

}

const getRandomColor = () => {
 const index = Math.floor(Math.random() * colors.length)
 return colors[index]
}