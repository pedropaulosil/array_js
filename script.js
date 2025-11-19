function start(){
    var paises = [null," Russia"," Haiti"," Tailândia"," Turcomenistão"," Brasil", " Canadá"," Turquia"," Islândia"," França"," Espanha", "Venezuela", "Uruguay","Guiana","Suriname","Colômbia",
        "Maldivas","Nepal","Croacia","Honduras","Bulgaria","Eslovaquia","Mali","Guatemala","Granada","USA","México","Polônia","Estônia","Emirados Arábes","Austrália" ];
        document.getElementById("pais").innerHTML = "<p>" + "Este é o 5º país: " + "<p>" + "<h2>" + paises[5]+ "</h2>" + "<br>";
        document.getElementById("decimopais").innerHTML = "<p>" + "Este é o 10º país: " + "<p>" + "<h3>" + paises[10]+"</h3>" + "<br>";

        var posicao = parseInt(prompt("Digite um valor"));
        posicao >0 && posicao<30? document.getElementById ("paisprocurado").innerHTML = "O país procurado é: " +"<h4>"+ paises[posicao]: document.write( "<h5> Digite um número válido. </h5>")
            
        
}
const iniciar = document.getElementById("start");
iniciar.addEventListener('click', start)




