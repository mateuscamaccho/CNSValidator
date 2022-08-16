function resolucao() {
    larguraTela = screen.width

    if (larguraTela == 1920) {
        document.body.style.fontSize = '14px'
    } else if (larguraTela == 1680) {
        document.body.style.fontSize = '12px'
    } else if (larguraTela == 1600) {
        document.body.style.fontSize = '12px'
    } else if (larguraTela == 1440) {
        document.body.style.fontSize = '10px'
    } else if (larguraTela == 1400) {
        document.body.style.fontSize = '10px'
    } else if (larguraTela == 1366) {
        document.body.style.fontSize = '8px'
    } else if (larguraTela == 1360) {
        document.body.style.fontSize = '8px'
    } else if (larguraTela == 1280) {
        document.body.style.fontSize = '9px'
    } else if (larguraTela == 1152) {
        document.body.style.fontSize = '9px'
    } else if (larguraTela == 1024) {
        document.body.style.fontSize = '9px'
    } else if (larguraTela <= 992) {
        document.body.style.fontSize = '14px'
    } else {
        document.body.style.fontSize = '14px'
    }
}

resolucao()

function validarCns(cns) {
    var element = document.getElementById('div-validade');
    if (cns.length != 15) {
        console.log('menos de 15 digitos')

        element.textContent = 'O numero está incorreto, inferior a 15 digitos!';
    } else {

        var soma;
        var resto;
        var dv;
        var pis = new String("");
        var resultado = new String("");
        if (cns.substring(0, 1) == 1 || cns.substring(0, 1) == 2) {
            pis = cns.substring(0, 11);
            soma = (((parseFloat(pis.substring(0, 1)) | 0)) * 15) + 
                   (((parseFloat(pis.substring(1, 2)) | 0)) * 14) + 
                   (((parseFloat(pis.substring(2, 3)) | 0)) * 13) + 
                   (((parseFloat(pis.substring(3, 4)) | 0)) * 12) + 
                   (((parseFloat(pis.substring(4, 5)) | 0)) * 11) + 
                   (((parseFloat(pis.substring(5, 6)) | 0)) * 10) + 
                   (((parseFloat(pis.substring(6, 7)) | 0)) * 9) + 
                   (((parseFloat(pis.substring(7, 8)) | 0)) * 8) +
                   (((parseFloat(pis.substring(8, 9)) | 0)) * 7) + 
                   (((parseFloat(pis.substring(9, 10)) | 0)) * 6) + 
                   (((parseFloat(pis.substring(10, 11)) | 0)) * 5);
            resto = soma % 11;
            dv = 11 - resto;
            if (dv === 11) {
                dv = 0;
            }
            if (dv === 10) {
                soma = (((parseFloat(pis.substring(0, 1)) | 0)) * 15) + 
                (((parseFloat(pis.substring(1, 2)) | 0)) * 14) + 
                (((parseFloat(pis.substring(2, 3)) | 0)) * 13) + 
                (((parseFloat(pis.substring(3, 4)) | 0)) * 12) + 
                (((parseFloat(pis.substring(4, 5)) | 0)) * 11) + 
                (((parseFloat(pis.substring(5, 6)) | 0)) * 10) + 
                (((parseFloat(pis.substring(6, 7)) | 0)) * 9) + 
                (((parseFloat(pis.substring(7, 8)) | 0)) * 8) + 
                (((parseFloat(pis.substring(8, 9)) | 0)) * 7) + 
                (((parseFloat(pis.substring(9, 10)) | 0)) * 6) + 
                (((parseFloat(pis.substring(10, 11)) | 0)) * 5) + 2;
                resto = soma % 11;
                dv = 11 - resto;
                resultado = pis + "001" + /* valueOf */ String((dv | 0)).toString();
            }
            else {
                resultado = pis + "000" + /* valueOf */ String((dv | 0)).toString();
            }
            if (!(cns === resultado)) {
                element.textContent = 'Este numero de CNS não é válido!';
            }
            else {
                element.textContent = 'Este numero de CNS é válido!';
            }
        } else {
            soma = (((parseFloat(cns.substring(0, 1)) | 0)) * 15) + 
            (((parseFloat(cns.substring(1, 2)) | 0)) * 14) + 
            (((parseFloat(cns.substring(2, 3)) | 0)) * 13) + 
            (((parseFloat(cns.substring(3, 4)) | 0)) * 12) + 
            (((parseFloat(cns.substring(4, 5)) | 0)) * 11) + 
            (((parseFloat(cns.substring(5, 6)) | 0)) * 10) + 
            (((parseFloat(cns.substring(6, 7)) | 0)) * 9) + 
            (((parseFloat(cns.substring(7, 8)) | 0)) * 8) + 
            (((parseFloat(cns.substring(8, 9)) | 0)) * 7) + 
            (((parseFloat(cns.substring(9, 10)) | 0)) * 6) + 
            (((parseFloat(cns.substring(10, 11)) | 0)) * 5) + 
            (((parseFloat(cns.substring(11, 12)) | 0)) * 4) + 
            (((parseFloat(cns.substring(12, 13)) | 0)) * 3) + 
            (((parseFloat(cns.substring(13, 14)) | 0)) * 2) + 
            (((parseFloat(cns.substring(14, 15)) | 0)) * 1);
            resto = soma % 11;
            if (resto !== 0) {
                element.textContent = 'Este numero de CNS não é válido!';
            }
            else {
                element.textContent = 'Este numero de CNS é válido!';
            }

        }

    }



}

el = document.getElementById("consultar");

el.addEventListener("click", function () {
    numeroCns = document.querySelector(".input-carteirinha")
    numeroCns = numeroCns.value.replace(/\s/g, '');
    validarCns(numeroCns)
});