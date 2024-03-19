var n1n = document.getElementById("n1");
n1n = n1n.placeholder;

var n2n = document.getElementById("n2");
n2n = n2n.placeholder;

var n3n = document.getElementById("n3");
n3n = n3n.placeholder;

var n4n = document.getElementById("n4");
n4n = n4n.placeholder;

var n5n = document.getElementById("n5");
n5n = n5n.placeholder;

var n6n = document.getElementById("n6");
n6n = n6n.placeholder;

var n7n = document.getElementById("n7");
n7n = n7n.placeholder;

var n8n = document.getElementById("n8");
n8n = n8n.placeholder;

var n9n = document.getElementById("n9");
n9n = n9n.placeholder;

var n0n = document.getElementById("n0");
n0n = n0n.placeholder;

terminal = document.getElementById("terminal");

var ndividir = document.getElementById("dividir");
ndividir = ndividir.placeholder;

var nmulti = document.getElementById("multi");
nmulti = nmulti.placeholder;

var nmais = document.getElementById("mais");
nmais = nmais.placeholder;

var nmenos = document.getElementById("menos");
nmenos = nmenos.placeholder;

var nigual = document.getElementById("igual");
nigual = nigual.placeholder;

var nvirgula = document.getElementById("virgula");
nvirgula = nvirgula.placeholder;
valor1 = 0;
valor2 = 0;
calculo = 0;
calculototal = 0;
qual = 0;
i = 1
sinal = ""
conta = `Resultado${i}: ` + calculototal
resultado = ""
maximo = 0
a = document.getElementById("max")

function apagar() {
    terminal.value = "0"
    calculo = 0
    calculototal = 0
    conta = 0;

}

function apaga1() {
    let inputValue = document.getElementById('terminal').value;
    let charArray = Array.from(inputValue);

    // Check if the array is not empty before removing the last character
    if (charArray.length > 1) {
        charArray.pop();  // Remove the last character from the array

        // Convert the modified array back to a string
        let modifiedString = charArray.join('');

        // Convert the string to an integer
        let integerValue = parseInt(modifiedString, 10);

        // Update the value of the 'terminal' input with the integer
        document.getElementById('terminal').value = integerValue;
        calculototal = integerValue
        console.log(charArray);
    }
}

function assume() {
    calculototal = document.getElementById('terminal').value;
    console.log('assume function called');

}

function n1() {
    terminal.value = terminal.value + + n1n;
    conta += conta + "1"



}

function n2() {

    terminal.value = terminal.value + + n2n;
    conta = conta + "2"

}

function n3() {

    terminal.value = terminal.value + + n3n;
    conta = conta + "3"

}

function n4() {

    terminal.value = terminal.value + + n4n;
    conta = conta + "4"

}

function n5() {

    terminal.value = terminal.value + + n5n;
    conta = conta + "5"

}

function n6() {

    terminal.value = terminal.value + + n6n;
    conta = conta + "6"

}

function n7() {

    terminal.value = terminal.value + + n7n;
    conta = conta + "7"

}

function n8() {

    terminal.value = terminal.value + + n8n;
    conta = conta + "8"

}

function n9() {

    terminal.value = terminal.value + + n9n;
    conta = conta + "9"

}

function n0() {

    terminal.value = terminal.value + + n0n;
    conta = conta + "0"

}

function virgula() {
    terminal.value = terminal.value + nvirgula;
    calculo = terminal.value;
}

function salvar() {
    var historico = document.getElementById("hist");
    console.log(conta)
    if (terminal.value == "NaN")
        resultado = `Resultado${i}: Syntax Error` + '\n'
    else if (sinal == "+")
        resultado = `Resultado${i}: ${valor1} ${sinal} ${valor2} = ${valor1 + + valor2}` + '\n'
    else if (sinal == "-")
        resultado = `Resultado${i}: ${valor1} ${sinal} ${valor2} = ${valor1 - valor2}` + '\n'
    else if (sinal == "*")
        resultado = `Resultado${i}: ${valor1} ${sinal} ${valor2} = ${valor1 * valor2}` + '\n'
    else if (sinal == "%")
        resultado = `Resultado${i}: ${valor1} ${sinal} ${valor2} = ${valor1 % valor2}` + '\n'
    else if (sinal == "/")
        resultado = `Resultado${i}: ${valor1} ${sinal} ${valor2} = ${valor1 / valor2}` + '\n'
    else if (sinal == "^")
        resultado = `Resultado${i}: ${valor1} Elevado a 2 = ${Math.pow(valor1, 2)}` + '\n'
    else if (sinal == "v")
        resultado = `Resultado${i}: Raiz de ${valor1} = ${Math.sqrt(valor1)}` + '\n'
    else if (sinal == "$")
        resultado = `Resultado${i}: Conversão de ${valor1}$ = ${(valor1 * 1.09).toFixed(2)}€` + '\n'
    else if (sinal == "€")
        resultado = `Resultado${i}: Conversão de ${valor1}€ = ${(valor1 * 0.92).toFixed(2)}$` + '\n'
    historico.value += resultado
    ++i;
    conta = `Resultado${i}: ` + terminal.value
}

function soma() {
    valor1 = parseFloat(terminal.value)
    terminal.value = "";
    sinal = "+"
    console.log(conta);




}



function menos() {
    valor1 = parseFloat(terminal.value)

    terminal.value = ""
    sinal = "-"



}

function vezes() {
    valor1 = parseFloat(terminal.value)

    terminal.value = ""
    sinal = "*"

}

function divide() {
    valor1 = parseFloat(terminal.value)

    terminal.value = ""
    sinal = "/"

}

function percent() {
    valor1 = parseFloat(terminal.value)

    terminal.value = ""
    sinal = "%"


}



function raiz() {
    valor1 = parseFloat(terminal.value)
    sinal = "v"
    conta = `Resultado${i}: Raiz de ${terminal.value} = ${Math.sqrt(terminal.value)}`

    terminal.value = Math.sqrt(terminal.value)
    if (terminal.value >= maximo) {
        maximo = terminal.value
        a.value = terminal.value
    }

    salvar();



}

function elevado() {
    valor1 = parseFloat(terminal.value)
    sinal = "^"
    conta = `Resultado${i}: Elevado de ${terminal.value} = ${Math.pow(terminal.value, 2)}`

    terminal.value = Math.pow(terminal.value, 2)

    if (terminal.value >= maximo) {
        maximo = terminal.value
        a.value = terminal.value
    }

    salvar();

}

function dolartoeuro() {
    valor1 = parseFloat(terminal.value)
    sinal = "$"
    conta = `Resultado${i}: Conversão de ${terminal.value}$ = ${terminal.value * 1.09}€`
    terminal.value = (terminal.value * 1.09).toFixed(2)

    if (terminal.value >= maximo) {
        maximo = terminal.value
        a.value = terminal.value
    }

    salvar();
}

function eurotodolar() {
    valor1 = parseFloat(terminal.value)
    sinal = "€"
    conta = `Resultado${i}: Conversão de ${terminal.value}€ = ${terminal.value * 0.92}$`
    terminal.value = (terminal.value * 0.92).toFixed(2)

    if (terminal.value >= maximo) {
        maximo = terminal.value
        a.value = terminal.value
    }

    salvar();

}

function igual() {
    valor2 = terminal.value
    if (sinal == "+")
        resultado = valor1 + + valor2
    else if (sinal == "-")
        resultado = valor1 - valor2
    else if (sinal == "*")
        resultado = valor1 * valor2
    else if (sinal == "/")
        resultado = valor1 / valor2
    else if (sinal == "%")
        resultado = valor1 % valor2
    else if (sinal == "^")
        resultado = Math.pow(valor1, 2)
    else if (sinal == "v")
        resultado = Math.sqrt(valor1)
    terminal.value = resultado
    calculo = 0
    conta = resultado

    if (resultado >= maximo) {
        maximo = resultado
        a.value = resultado
    }
    salvar();

}

function atras() {
    {
        let inputValue = document.getElementById('terminal').value;
        let charArray = Array.from(inputValue);


        if (charArray.length > 1) {
            charArray.pop();


            let modifiedString = charArray.join('');


            let integerValue = parseInt(modifiedString, 10);


            document.getElementById('terminal').value = integerValue;
            calculo = integerValue
            console.log(charArray);
        }
    }
}




document.addEventListener('keydown', function (event) {

    if (event.key >= '0' && event.key <= '9') {

        window['n' + event.key]();
    } else if (event.key === '.') {

        virgula();
    } else if (event.key === '+') {
        soma()
    }
    else if (event.key === '-') {
        menos()
    }
    else if (event.key === '*') {
        vezes()
    }
    else if (event.key === '/') {
        divide()
    }

    else if (event.key === 'Enter') {

        igual();
    } else if (event.key === 'Backspace') {

        atras();
    }
}
);

function mostrar() {
    if (document.getElementById("omg").style.display == "none") {
        document.getElementById("omg").style.display = "block";
        document.getElementById("calculadora").style.display = "none";
        document.getElementById("seta1").style.display = "block";
        document.getElementById("seta2").style.display = "none";
        document.getElementById("historicoo").style.display = "none";
        element = document.getElementById("histit")
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        document.getElementById("omg").style.display = "none";
        document.getElementById("calculadora").style.display = "flex";
        element = document.getElementById("calculadora")
        document.getElementById("historicoo").style.display = "block";
        document.getElementById("seta2").style.display = "block";
        document.getElementById("seta1").style.display = "none";
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

var colorPicker1 = document.getElementById('colorPicker1');
var colorPicker2 = document.getElementById('colorPicker2');
var colorPicker3 = document.getElementById('colorPicker3');

// Attach an event listener to detect changes in the color picker
colorPicker1.addEventListener('input', function () {
    // Get the selected color value
    var selectedColor = colorPicker1.value;

    // Set the background color of the body
    document.body.style.background = selectedColor;
});

colorPicker2.addEventListener('input', function () {
    // Get the selected color value
    var elements = document.getElementsByClassName("operador");
var selectedColor = colorPicker2.value

for (var i = 0; i < elements.length; i++) {
  elements[i].style.background = selectedColor;
}

    // Set the background color of the body
    
});

colorPicker3.addEventListener('input', function () {
    // Get the selected color value
    var elements = document.getElementsByClassName("operador");
var selectedColor = colorPicker3.value

for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = selectedColor;
}
});

function downloadAsTxt() {
 
    const txtContent = "Histórico\n" + document.getElementById("hist").value;
 
    // Create a Blob containing the text content
    const blob = new Blob([txtContent], { type: 'text/plain' });
 
    // Create a download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'historico.txt';
 
    // Append the link to the document and trigger a click to start the download
    document.body.appendChild(link);
    link.click();
 
    // Remove the link from the document
    document.body.removeChild(link);
}

function downloadAsPDF() {
    const pdfContent = document.getElementById("hist").value;
 
    // Create a new HTML element to hold the content
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = "Histórico<br>" + pdfContent.replace(/\n/g, "<br>");
 
    // Use html2pdf to generate a PDF from the HTML content
    html2pdf(contentDiv, {
        margin: 10,
        filename: "historico.pdf",
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}


