

const add=document.querySelector('#add_task');


add.addEventListener('click',function(event){
    event.preventDefault();
    
const task =document.querySelector('#task').value;

const tasklist= document.querySelector('#new_task');
const newtask=document.createElement('div');
newtask.innerHTML='<input type="checkbox" name="task"><label class="content">' +task+ '</label><input class="icon" class="delete" type="image" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="Delete"><br>';

tasklist.appendChild(newtask);
document.querySelector('#task').value='';

newtask.querySelector('.delete');

newtask.querySelector('.delete').addEventListener('click',function(event){
    event.preventDefault();
    
    tasklist.removeChild(newtask);

});
});


