console.log("TOPIC 1: Classes");
//this — это ссылка на текущий объект
class Post{
    constructor(author, text){
        this.author = author;
        this.text = text;
        this.likes = 0;
    }

    addLike(){
        this.likes += 1;
        console.log("Thanks for your reaction");
    }

    showPost(){
        console.log(`
			Author:${this.author}
			Text:${this.text}
			Likes:${this.likes}
		`)
    }
}

const myPost = new Post("Vera", "Great!");
myPost.showPost();
myPost.addLike();
myPost.addLike();
myPost.showPost();

console.log("Practice");
/*Создать класс TodoList, который хранит задачи, позволяет их добавлять, показывать и помечать как выполненные
с имитацией задержки, как будто сохраняем изменения в базе данных.*/

class ToDoList{
    constructor(){
        this.tasklist = [];
    }

    addTask(task){
        this.tasklist.push({task: task, completed: false});
        console.log(`Added task: ${task}`);
    }

    showTaskList(){
        for(let i=0; i<this.tasklist.length; i++){
            console.log(this.tasklist[i]);
        }
    }

    async isDoneStatus(taskName){

        try{
            let task = this.tasklist.find(t => t.task = taskName)


            //мы только ждём задержку, нам не нужно сообщать об ошибке.
            //resolve — это сигнал, что промис успешно завершился.
            //reject не нужен, потому что мы не ожидаем ошибок в таймере.
            await new Promise(resolve => setTimeout(resolve, 2000));

            if(task){
                task.completed = true;
                return `Задача "${task.task}" выполнена!`;
            }else{
                //Если не найдена → throw создаёт ошибку, которая превращается в reject промиса.
                throw new Error (`Задача ${taskName} не существует!`);
            }

        } catch (error){
            throw error;
        }
    }
}


let myTask = new ToDoList();
myTask.addTask("JS learning");
myTask.addTask("Slovak learning");

async function markTask(){
    try {
        const message = await myTask.isDoneStatus("JS learning");
        console.log(message);
        myTask.showTaskList();
    } catch (error) {
        console.log(error);
    }
}

markTask();