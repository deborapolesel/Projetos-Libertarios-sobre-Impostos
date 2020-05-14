var primeiraPergunta = prompt ('Imposto é roubo?\nDigite SIM ou NÃO');
        if (primeiraPergunta === 'NÃO'||primeiraPergunta === 'Não'||primeiraPergunta === 'não'||primeiraPergunta === 'nao'||primeiraPergunta === 'Nao'||primeiraPergunta === 'NAO'){
            var segundaPergunta = prompt ('Você paga o imposto por que quer?\nDigite SIM ou NÃO');
            if (segundaPergunta === 'SIM'||segundaPergunta ==='Sim'||segundaPergunta ==='sim'){
                var terceiraPergunta = prompt ('Você poderia deixar de pagar o imposto?\nDigite SIM ou NÃO');
                if (terceiraPergunta === 'SIM'||terceiraPergunta === 'Sim'||terceiraPergunta === 'sim'){
                    var quartaPergunta = prompt ('Você iria preso se deixasse de pagar?\nDigite SIM ou NÃO');
                    if (quartaPergunta === 'NÃO'||quartaPergunta ==='não'||quartaPergunta ==='Não'||quartaPergunta ==='nao'||quartaPergunta ==='Nao'||quartaPergunta ==='NAO'){
                        alert ('De acordo com a Lei 4.729 (14/07/1965) você é obrigado a pagar.\nConheça mais sobre o Libertarianismo.');
                    } else {
                     alert ('Então você é obrigado a pagar o imposto, sendo assim, é roubo.\nConheça mais sobre o Libertarianismo.');
                    }
                } else {
                    alert ('Então você é obrigado a pagar o imposto, sendo assim, é roubo.\nConheça mais sobre o Libertarianismo.');
                }
            } else {
                alert ('Se você é obrigado a pagar então imposto é roubo.\nConheça mais sobre o Libertarianismo.')
            }
        } else {
            alert ('Concordo! Imposto é roubo.\nConheça mais sobre o Libertarianismo.');
        } 
