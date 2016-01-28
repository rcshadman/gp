BaseUrl = "/demo/vue";
var model={
    allPost:[],
    randomPost:{},
    readNext:[],

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
                    // datamodel:Object,
                    dataallpost:Array,
                    datarandomfour:Array,
                    datarandom:Object,
                        },
                    }
            },
        methods:{
        fetchAllPost:function()
        {
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
                    console.log(this.model)
                    console.log(this.allPost)
                    console.log(this.randomPost)
                    console.log(this.readNext)
                    
                    })
                            
                }
    
             },
        ready:function(){this.fetchAllPost();}
                  
})




var detail_page = Vue.extend({
    template:'#detail_temp',
    data:function(){ 
        return {
            
            datapost:[],
             
        }
    },
    methods:{
        fetchAllPost:function()
        {
                this.$http.get('api/'+this.$route.params.postid)
                .success(function(response){ 
                    this.$set('datapost', response);
                     setTimeout(600);
                    })
                            
                }
    
             },
        ready:function(){this.fetchAllPost();}

    
    })

var list_page = Vue.extend({
    template:'#list_temp',
    data:function(){ 
        return {
            datamodel:{},
            dataallpost:[],
            datarandom:{} 
        }
    },
    methods:{
        fetchAllPost:function()
        {
                this.$http.get('api/')
                .success(function(response){ 
                    this.$set('dataallpost', response);
                    randompost=generateRandom(1,this.dataallpost);
                    this.$set('datarandom',randompost[0]);
                    setTimeout(600);
                    
                    })
                            
                }
    
             },
        ready:function(){this.fetchAllPost();}
     

})






Vue.use(VueRouter)
var router = new VueRouter();


routes = {
        '/': {
            name:'list',
            component: list_page
        },
        '/:postid': {
             name:'detail',
             component: detail_page,

        }
    }
router.map(routes)


var App = Vue.extend({})
router.start(App, '#App')


// redirects = {

//   //redirect any navigation to /a to /b
//   '/': '/',

//   //redirect can contain dynamic segments
//   //the dynamic segment names must match
//   '/user/:userId': '/profile/:userId',

//   //redirect any not-found route to home
//   '*': '/'
// }
// router.redirect(redirects)


// var App = new Vue({
//     el:'#App',
//     data:model,
//     components:{
//             'detail':{
//                 template:'#detail_temp',
//                 props: {
//                     datamodel:Object,
//                     dataallpost:Array,
//                         },
//                 },
//             'list':{
//                 template:'#list_temp',
//                 props: {
//                     datamodel:Object,
//                     dataallpost:Array,
//                     datarandom:Object,
//                         },
//                     }



//             }
// })
