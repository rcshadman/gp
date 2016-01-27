var pickRandomPost = function(array){
    return array[Math.floor(Math.random()*array.length)];
}

var App = new Vue({
    el:'#App',
    
    data:{
        message:'Hello',
        allPost:[],
        readnext:[],
        randompost:{}

    },
    
    methods:{
        
        generateRandom:function(num){
                            result=[];
                            allpost=[];
                            allpost = allpost.concat(this.allPost);
                            for(var i=1; i<= num ;i++ )
                            {   randpost = pickRandomPost(allpost);
                                result.push(randpost);
                                index = allpost.indexOf(randpost);
                                allpost.splice(index-1,1);
                            }
                            if(num===4){this.$set('readnext',result);}
                            else
                            if(num===1){this.$set('randompost',result[0]);} 
                            console.log(result)

                            },
        fetchAllPost:function(){
                            this.$http.get('api/')
                            .success(function(response){ this.$set(
                                'allPost', response); 
                                console.log(this.allPost);
                                this.generateRandom(1);
                                this.generateRandom(4);
                                
                            })
                            .error(function(error) { console.log(error); } );
                            },
        fetchPostWithId:function(id){
                            url="/api"+id
                            this.$http.get(url)
                            .success(function(response){ this.$set('postById', response); console.log(response);} )
                            .error(function(error) { console.log(error); } );
                            }
    
             },
        ready:function(){
                        this.fetchAllPost();
                        
                        
                        },
    


})


var navigation = Vue.extend({
  template: '#navigation_temp'
})
// register
Vue.component('navigation', navigation)

// create a root instance
new Vue({
  el: '#navigation'
})




var readnext = Vue.extend({
    template: '#readnext_temp',
    props: {
        readnext: Array,
        },
    data:{
        readnext:readnext
    }
  }
})
// register
Vue.component('readnext', readnext)

// create a root instance
new Vue({
  el: '#readnext'
})

// Vue.partial('navigation', '<h1>This is a partial!</h1>')




