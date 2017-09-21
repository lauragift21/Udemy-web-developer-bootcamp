    var todo = ["wash my hair"];
    var input = prompt("what will you like to do?");
    while (input !== "quit"){
        //handle input
        if (input === "list") {
            listTodo();
        } else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        //ask to try again
        input = prompt("what will you like to do?");
    
    }
    console.log('Ok You Quit the App');

    function listTodo() {
        console.log("*****************");
        todo.forEach(function(todos, i){
            console.log(i + ':' + todos);
        })
        console.log("*****************");
    }
    function addTodo() {
        //ask for new todo add to todo array
        var newtodo = prompt('Enter new todo');
        //add to todo
        todo.push(newtodo);
        console.log("Added todo");
    }
    function deleteTodo() {
        // ask for index to be deleted
        var index = prompt("Enter index of todo to delete");
        // delete todo
        todo.splice(index, 1);
        console.log("Deleted todo");
    }