const app = Vue.createApp({
    template: 
    '<div><img :class="gender" :src="picture"/> <h1>{{firstName}} {{lastName}}</h1> <h3>email:{{email}}</h3><h3>gender:{{gender}}</h3><button :class="gender" @click=getUser() >Get random user</button></div>',
    data() {
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
        getUser(){
           axios.get('https://randomuser.me/api/')
           .then((response)=>{
            this.firstName = response.data.results[0].name.first
            this.lastName = response.data.results[0].name.last
            this.email = response.data.results[0].email
            this.gender = response.data.results[0].gender
            this.picture = response.data.results[0].picture.large
           })
        }
    }
})
app.mount("#app")