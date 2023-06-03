const form = document.getElementById('form')
        const input = document.getElementById('input')
        const todosUL = document.getElementById('todos')
        const todos = JSON.parse( localStorage.getItem('form'))
        
        if (todos){
            todos.forEach( todo => addTodo(todo));
        }

        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            addTodo()
        })

        // Funcionamiento del proyecto
        function addTodo(todo){
           
            //Añadir tareas
            let todoText = input.value
            if(todo){
                todoText= todo.text
            }

            //Añadir tareas a la lista y crearla
            if(todoText){

                //Crear lista
                const todoEl = document.createElement('li')

                if (todo && todo.completed)
                {
                    todoEl.classList.add('completed')
                }
                todoEl.innerText=todoText

                //Tachar tareas de la lista//Evento click=activar evento con click
                todoEl.addEventListener  ('click', ()=> {
                    todoEl.classList.toggle('completed')
                    updateLS()
                })

                //Borrar tareas de la lista//Evento contextmenu=activar evento con click derecho
                todoEl.addEventListener('contextmenu', (e)=> {
                    e.preventDefault()
                    todoEl.remove()
                    updateLS()
                })

                //Valor predeterminado de la siguiente tarea que introduces
                todosUL.appendChild(todoEl)
                input.value =''
                updateLS()
            }
        }
        function updateLS(){
            todosEl = document.querySelectorAll('li')
            const todos = []
            todosEl.forEach(todoEl=> {
                
                //Empuja todas las tareas hacia abajo
                todos.push({
                    text: todoEl.innerText,
                    completed: todoEl.classList.contains('completed')
                })
            })
            localStorage.setItem('todos', JSON.stringify(todos))
        }