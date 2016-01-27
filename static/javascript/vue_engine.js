var model={
    allPost:[],
    randomPost:{},
    readNext:[]
};


var pickRandomPost = function(array){
    return array[Math.floor(Math.random()*array.length)];
}

var generateRandom = function(num,array){
                            result=[];
                            allpost=[];
                            allpost = allpost.concat(this.array);
                            for(var i=1; i<= num ;i++ )
                            {   randpost = pickRandomPost(array);
                                result.push(randpost);
                                index = allpost.indexOf(randpost);
                                allpost.splice(index-1,1);
                            }
                            return result;

                            }



var fetchPostWithId = function(id){
                            url="/api"+id
                            this.$http.get(url)
                            .success(function(response){ this.$set('postById', response); console.log(response);} )
                            .error(function(error) { console.log(error); } );
                            }                            


var navigation = Vue.extend({
  template: '#navigation_temp'
})
// register
Vue.component('navigation', navigation)

// create a root instance
new Vue({
  el: '#navigation'
})




// var readnext = Vue.extend({
//     template: '#readnext_temp',
    
  
// })
// register
// Vue.component('readnext', readnext)

// create a root instance
new Vue({
        el: '#readnext',
      data:model,
    components:{
        'readnext':{
            template:'#readnext_temp',
            props: {
                datamodel:Object,
                dataallpost:Array,
                datarandomfour:Array,
                datarandom:Object,
                

            },
        

                    }
            },
        ready:function(){
                // this.$set('model',{})    
                // this.generateRandomPosts()

            },
        methods:{

        
        },          



})





var App = new Vue({
    el:'#App',
    
    data:model,
    
    methods:{
     
         fetchAllPost:function(){
                            this.$http.get('api/')
                            .success(function(response){ 
                                this.$set('allPost', response);
                                this.$set('model.allPost', this.allPost);
                                
                                randompost=pickRandomPost(this.allPost);
                                this.$set('randomPost',randompost);
                                this.$set('model.randomPost',randompost);
                                setTimeout(1200);
                                
                                randomfour=generateRandom(4,this.allPost);
                                this.$set('readNext',randomfour);
                                this.$set('model.readNext',randomfour);
                                console.log(randomfour);
                                
                                })
                            
                            }
    
             },
        ready:function(){
                        this.fetchAllPost();
                        
                        
                        },
  

})



