function cliq() {
    alert("Opa, você clicou!")
}

function cliq2() {
    const p1 = document.getElementById("phrase")
    p1.textContent = "Você clicou no botão 2!"
    alert("Você clicou no botão 2!")
}

function cliq3() {
    const p1 = document.getElementById("phrase")
    p1.textContent = "imagem.webp"
    alert("Você clicou no botão 3!")
}

function cliq4() {
    const p1 = document.getElementById("phrase")
    p1.style.color = "red"
    p1.textContent = "O texto mudou de cor para vermelho!"
    p1.textContent = "imagem.webp"
    alert("Você clicou no botão 4!")
}

function cliq5() {
    const p1 = document.getElementById("phrase")
    p1.style.fontSize = "2em"
    p1.textContent = "O texto agora está maior!"
    p1.textContent = "imagem.webp"
    alert("Você clicou no botão 5!")
}