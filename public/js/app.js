/*lec 18
new Vue({
el:"#ex",    
data:{ skills:[]},
mounted()
    {
        axios.get('vue').then(response =>{this.skills = response.data;});
    },
});
*/

/*lec 19*/
new Vue({
el:"#ex",    
data:{name : '', desc: '' , errors:{} },
methods : {
    
    onSubmit()
        {
            axios.post('projects',{name:this.name, desc: this.desc }).then(response => console.log('success'))
            .catch(error =>{console.log(error.response);});   
        }
},

});