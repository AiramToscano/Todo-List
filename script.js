const pegarclasselist = document.querySelectorAll('#lista-tarefas');

function click() {
// parte da logica foi pesquisada nos exercicios do calendario trybe proposto.
  const test1 = document.querySelector('#criar-tarefa');
  test1.addEventListener('click', () => {
    const test2 = document.querySelector('#texto-tarefa');
    const test31 = document.querySelector('#lista-tarefas');
    const newli = document.createElement('li');
    newli.innerText = test2.value;
    test31.appendChild(newli);
    test2.value = '';
  });
}
click();
// function color, doubleclcik e clearbuttom a logica foi basicamente a mesma do projeto pixel arts
function color() {
  for (let i = 0; i < pegarclasselist.length; i += 1) {
    pegarclasselist[i].addEventListener('click', (e) => {
      const pegarli = document.getElementsByTagName('li');
      for (let j = 0; j < pegarli.length; j += 1) {
        pegarli[j].classList.remove('testli');
        pegarli[j].style.backgroundColor = 'white';
      }
      e.target.classList.add('testli');
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
color();

function doubleclick() {
  for (let i = 0; i < pegarclasselist.length; i += 1) {
    pegarclasselist[i].addEventListener('dblclick', (e) => {
      const verifica = true;
      if (e.target.classList.contains('completed') !== verifica) {
        e.target.classList.add('completed');
      } else {
        e.target.classList.remove('completed');
      }
    });
  }
}
doubleclick();

function clearbuttom() {
  const clear = document.querySelector('#apaga-tudo');
  clear.addEventListener('click', () => {
    const children = document.getElementById('lista-tarefas');
    children.innerHTML = '';
  });
}
clearbuttom();
// conteudo visto no site https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
function clearbuttomfinish() {
  const clear1 = document.querySelector('#remover-finalizados');
  clear1.addEventListener('click', () => {
    const children1 = document.querySelectorAll('.completed');
    for (let i = 0; i < children1.length; i += 1) {
      const compara = children1[i];
      if (compara.classList.contains('completed')) {
        compara.remove();
      }
    }
  });
}
clearbuttomfinish();
