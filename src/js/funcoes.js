window.addEventListener("load", () => {

    document.getElementById('dv1').addEventListener('click', divClicada);
    document.getElementById('btn-limpar').addEventListener('click', limpar);

    document.getElementById('cmb-opcoes').addEventListener('change', function () {
        var e = document.getElementById('cmb-opcoes');
        /* Para pegar o value do item selecionado.
           var itemSelecionado = e.options[e.selectedIndex].value; */
        var opcaoSelecionada = e.options[e.selectedIndex].text;
        switch (opcaoSelecionada.trim()) {
            case "Selecione":
                break;
            case 'Somar':
                somar();
                break;
            case 'Subtrair':
                subtrair();
                break;
            case 'Multiplicar':
                multiplicar();
                break;
            case 'Dividir':
                dividir();
                break;
            case 'Concatenar':
                concatenar();
                break;
            default:
                limpar();
        }
    });

    function somar() {
        let valor1 = document.getElementById('campo1').value;
        let valor2 = document.getElementById('campo2').value;
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) + parseFloat(valor2) : valor1;
        !isNaN(resultado) ? document.getElementById('resultado').value = resultado.toFixed(2) : valor1;
    }

    function subtrair() {
        let valor1 = document.getElementById('campo1').value;
        let valor2 = document.getElementById('campo2').value;
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) - parseFloat(valor2) : valor1;
        !isNaN(resultado) ? document.getElementById('resultado').value = resultado.toFixed(2) : valor1;
    }

    function multiplicar() {
        let valor1 = document.getElementById('campo1').value;
        let valor2 = document.getElementById('campo2').value;
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) * parseFloat(valor2) : valor1;
        !isNaN(resultado) ? document.getElementById('resultado').value = resultado.toFixed(2) : valor1;
    }

    function dividir() {
        let valor1 = document.getElementById('campo1').value;
        let valor2 = document.getElementById('campo2').value;
        let resultado = valor1.trim() && valor2.trim() !== '' ? parseFloat(valor1) / parseFloat(valor2) : valor1;
        !isNaN(resultado) ? document.getElementById('resultado').value = resultado.toFixed(2) : valor1;
    }

    function concatenar() {
        let valor1 = document.getElementById('campo1').value;
        let valor2 = document.getElementById('campo2').value;
        valor1.trim() || valor2.trim() !== '' ? document.getElementById('resultado').value = `${valor1} ${valor2}` : valor1;
    }

    function limpar() {
        document.getElementById('campo1').value = '';
        document.getElementById('campo2').value = '';
        document.getElementById('resultado').value = '';
        document.getElementById('cmb-opcoes').selectedIndex = 0;
        document.getElementById('campo1').focus();
    }

    function divClicada() {
        alert('Click na div...');
    }
});