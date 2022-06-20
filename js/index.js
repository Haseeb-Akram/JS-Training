window.onload = () => {
    document.querySelectorAll('.inp').forEach(item => {
        item.addEventListener('click', event => { 
          putInput(event.currentTarget.id);
        })
      }); 
      document.getElementById('ac').addEventListener('click', clearAll);
      document.getElementById('evaluate').addEventListener('click', evaluteExp);
      document.getElementById('ternary').addEventListener('click', switchMode);
}

const putInput = (element) => { 
    let input = document.getElementById('input');   
    if(input.innerText === 'Math Error' || input.innerText === '0') {
        input.innerText = element;
    } 
    else {
        input.innerText += element;
    } 
}

const clearAll = () => {
    let input = document.getElementById('input');
    input.innerText = 0;
}

const evaluteExp = () => {
    let input = document.getElementById('input');
    try {
        input.innerText = eval(input.innerText);
    } catch (err) {
        input.innerText = "Math Error"
    }
    
}
const switchMode = () => {
    const element = document.body;
    if (element.classList.contains('dark')) {
        element.classList.remove('dark');
        element.classList.add('light');
      } else {
        element.classList.add('dark');
        element.classList.remove('light');
      }
}