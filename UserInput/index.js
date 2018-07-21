var app = new Vue({
    el: "#app",
    data: {
        message: "goodbye cruel world"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("");
        }
    }
})