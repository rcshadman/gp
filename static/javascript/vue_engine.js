BaseUrl = "/demo/vue/";
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




var navigation_view = Vue.extend({
  template: '#navigation_temp',
})



// create a root instance
var readnext_view =Vue.extend({
        //
        template:'#readnext_temp',
        data:function(){ return { allPost:[],datarandomfour:[] }},
        methods:{
                fetchAllPost:function()
                {
                this.$http.get('api/')
                .success(function(response){ 
                    this.$set('allPost', response);
                    randomfour=generateRandom(4,this.allPost);
                    this.$set('datarandomfour',randomfour);
                    
                    
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
                    // setTimeout(600);
                    
                    })
                            
                }
    
             },
        ready:function(){this.fetchAllPost();},
        filters:{
            // truncate:function (str, length, truncation) {
            //       length = length || 5000;
            //       truncation = typeof truncation === "string" ? truncation : "...";
            //       str=this.el.textContent;
            //       return (str.length + truncation.length > length ? str.slice(0, length - truncation.length) : str) + truncation;
            //   },
            truncates:function (text, length, clamp) {
                clamp = clamp || '...';
                var node = document.createElement('div');
                node.innerHTML = text;
                var content = node.textContent;
                return content.length > length ? content.slice(0, length) + clamp : content;


                }
            }
            })


var app_view = Vue.extend({
    template:'#app_temp',
    components:{
        'navigation':navigation_view,
        'readnext':readnext_view

    }
})



Vue.use(VueRouter)
var router = new VueRouter({
    'hashbang':false,
    'root':'#/',
    'history':false
});


routes = {
        '/':{
            name:'root',
            component:app_view,
            subRoutes:{
                '/':{
                         name:'list',
                          component : list_page
                      },
                '/:postid':{
                        name:'detail',
                        component: detail_page,
                    }
            }
        },

    }
router.map(routes)

// router.redirect({

//   //redirect any navigation to /a to /b
//   '/list/': '/',

//   //redirect can contain dynamic segments
//   //the dynamic segment names must match
//   // '/user/:userId': '/profile/:userId',

//   //redirect any not-found route to home
//   // '*': '/'
// })


var App = Vue.extend({})
router.start(App, '#App')



