const left = document.querySelector('.left') 
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// Adiciona a classe 'hover-left' ao container quando o mouse entra no elemento 'left'
left.addEventListener('mouseenter', () => container.classList.add('hover-left')) 
// Remove a classe 'hover-left' do container quando o mouse sai do elemento 'left'
left.addEventListener('mouseleave', () => container.classList.remove('hover-left')) 

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
