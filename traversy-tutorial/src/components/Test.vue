<template>
    <div class="test">
        <h2>{{msg}}</h2>
        <input type="text" v-model="title"/>
        <br/><br/>
        <div v-html="title"></div>
        <p>{{full_name}}</p>
        <p v-if="!show_name" v-text="user.first_name"></p>
        <p v-else>Other things.</p>
        <ul>
            <li v-bind:key="key" v-for="(item, key) in items">{{item}}</li>
        </ul>
        <button v-on:click="greet(title)">Clicker</button>
        <br/><br/>
        <input type="text" v-on:keyup="presskey" v-on:keyup.enter="clear"/>
        <hr/>
        <label>First Name</label>
        <input type="text" v-model="user.first_name"/>
        <br/><br/>
        <label>Last Name</label>
        <input type="text" v-model="user.last_name"/>
    </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: 'Foobar'
            }
        },
        data() {
            return {
                title: '<h1>Hello World<h1>',
                user: {
                    first_name: 'Alex',
                    last_name: 'Leibowitz',
                },
                show_name: true,
                items: []
            }
        },
        methods: {
            greet: function(greeting) {
                alert(greeting);
            },
            presskey: function(e) {
                console.log(e.target.value);
            },
            clear: function(e) {
                this.items.push(e.target.value);
                e.target.value = "";
            }
        },
        computed: {
            full_name: function() {
                return `${this.user.first_name} ${this.user.last_name}`;
            }
        }
    }
</script>

<style scoped>

</style>