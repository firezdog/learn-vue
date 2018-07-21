Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: "#app",
    data: {
        groceryList: [
            {id: 0, text: "protein powder"},
            {id: 1, text: "dog food"},
            {id: 2, text: "tomatoes"},
        ]
    }
})
