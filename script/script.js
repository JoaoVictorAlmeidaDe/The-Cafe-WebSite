function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todos os elementos com a classe "tab-content"
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba atual e adiciona a classe "active" ao botão que a abriu
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}