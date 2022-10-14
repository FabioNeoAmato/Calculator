let buttons = Array.from(document.querySelectorAll('button'));
console.log(buttons);

let visio = document.getElementById('visio')
console.log(visio);

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                visio.innerText = '';
                break;
            case '=':
                try{
                    visio.innerText = eval(visio.innerText);
                } catch {
                    visio.innerText = "Error"
                }
                break;
            case 'A':
                if (visio.innerText){
                   visio.innerText = visio.innerText.slice(0, -1);
                }
                break;
            default:
                visio.innerText += e.target.innerText;
        }
    });
});


