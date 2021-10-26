function click(){  // parte da logica foi pesquisada nos exercicios do calendario trybe proposto.
  const test1 = document.querySelector("#criar-tarefa")
test1.addEventListener('click',function(){
  const test2 = document.querySelector("#texto-tarefa")
  const test3 = document.querySelector('#lista-tarefas')
  const newli = document.createElement('li');
  newli.innerText = test2.value;
  test3.appendChild(newli);
  test2.value= '';
});
}
click();

function color(){
const pegarclasselist = document.querySelectorAll("#lista-tarefas");
 for (let i = 0; i < pegarclasselist.length ; i += 1){ 
        pegarclasselist[i].addEventListener('click', function(e){
            const pegarli = document.getElementsByTagName('li');
            for(let i = 0 ; i < pegarli.length ; i += 1){
                pegarli[i].classList.remove('testli');
                pegarli[i].style.backgroundColor = 'white';
            }
              e.target.classList.add('testli');
              e.target.style.backgroundColor = 'rgb(128, 128, 128)';
        });
 }
}
color();



