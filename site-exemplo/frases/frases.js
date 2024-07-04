function inserir() {
    var frase = document.getElementById('txt1');
    var new_frase = frase.value;
    
    var p = document.createElement('p');
    p.innerText = new_frase;
    
    var mainContent = document.getElementById('mainContent');
    mainContent.appendChild(p);
}