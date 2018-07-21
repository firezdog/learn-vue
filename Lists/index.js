var app = new Vue({
    
    el: '#app',
    data: {
        todos: [
            {text: "Learn Vue"},
            {text: "Review Python"},
            {text: "Study algorithms"}
        ]
    }

})

app.todos.push({text: "Cook dinner."});