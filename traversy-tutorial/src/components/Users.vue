<template>
    <div class="users">
        <h1>To Contact</h1>
        <ul>
            <li v-bind:key="key" v-if="!user.contacted" v-for="(user, key) in users">
                <input type="checkbox" v-model="user.contacted"/>
				{{user.name}} -- {{user.email}} ||
				<button v-on:click="deleteUser(key)">Delete</button>
			</li>
		</ul>
		<h1>Contacted</h1>
		<ul>
			<li v-bind:key="key" v-if="user.contacted" v-for="(user,key) in users">
				{{user.name}} -- {{user.email}} ||
				<button v-on:click="deleteUser(key)">Delete</button>
			</li>
		</ul>
    <br/><br/>
    <form v-on:submit="process">
		<div>
			<label>User Name</label>
			<br/>
			<input placeholder="John Doe" v-model="new_user.name" type="text"/>
		</div>
		<br/>
		<div>
			<label>User Email</label>
			<br/>
			<input placeholder="john@doe.com" v-model="new_user.email" type="text"/>
		</div>
		<br />
		<div v-if="form_error">Name and email must be at least 4 characters.</div>
		<br/>
		<button>Add User</button>
    </form>
    </div>

</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
                users: [
                    {
                        name: "John Doe",
                        email: "john@doe.com",
                        contacted: true
                    },
                    {
                        name: "Steve Smith",
                        email: "john@smith.com",
                        contacted: false
                    },
                    {
                        name: "April Phuls",
                        email: "april@phuls.com",
                        contacted: false
                    }
				],
				new_user: {
					name: "",
					email: "",
					contacted: false
				},
				form_error: false
            }
        },
        methods: {
			process: function(e) {
				e.preventDefault();
				if (this.new_user.name.length < 4 || this.new_user.email.length < 4) { this.form_error = true; }
				else {
					// this.users.push({name: this.new_user.name, email: this.new_user.email, contacted: this.new_user.contacted});
					this.users.push({...this.new_user})
					this.new_user.name = "";
					this.new_user.email = "";
					this.form_error = false;
				}
			},
			deleteUser: function(user) {
				this.users.splice(user,1);
			},
			addData: function(data) {
				data.forEach(item => this.users.push({name: item.name, email: item.email, contacted: false}));
			}
		},
		created: function() {
			this.$http.get("https://jsonplaceholder.typicode.com/users").then(function(res){
				const data = res.body;
				this.addData(data);
			});
		}
    }
</script>

<style scoped>
	li {
		padding-bottom: 5px;
	}
</style>