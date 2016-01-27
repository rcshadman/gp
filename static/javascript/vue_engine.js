var filters = {
        truncate: function(string, value){
            return string.substring(0, value) + '...';
          },
      }


var model={
    allPost:[],
    randomPost:{},
    readNext:[]
};



function generateRandom(count,arr) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
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
        ready:function(){},
        methods:{},          
})


new Vue({
        el: '#list',
      data:model,
    components:{
        'list':{
                template:'#list_temp',
                props: {
                    datamodel:Object,
                    dataallpost:Array,
                    datarandom:Object,
                        },
                    }
            },
        ready:function(){},
        methods:{},
        filters: {
                truncate: function(string, value){
                return string.substring(0, value) + '...';
                },
      }
       
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
                                
                                randompost=generateRandom(1,this.allPost);
                                this.$set('randomPost',randompost[0]);
                                this.$set('model.randomPost',randompost[0]);
                                setTimeout(1200);
                                
                                randomfour=generateRandom(4,this.allPost);
                                this.$set('readNext',randomfour);
                                this.$set('model.readNext',randomfour);
                                console.log(randomfour);
                                
                                })
                            
                            }
    
             },
        ready:function(){this.fetchAllPost();},
})

var router = new VueRouter()
router.map({
    '/': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
})

var Content = Vue.extend({})
router.start(Content, '#content')

