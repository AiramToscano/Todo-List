function click(){
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