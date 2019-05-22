Vue.component('myhtmltag',{
  template: `
        <h1>
          text
          <span>wilson</span>
        </h1>`,

// `` is use for mutiline variable "" or '' only support single line varible assignment and you cant have mutiple root
// this is one of the way to declearing a vue component
});
var app1 = new Vue({
  el: '#vue-app',
  data: {
    msgs: "welcome to vue basic",
    // have to use https:// ohterwise you will get a bad GET request
    googleLink: "https://www.google.ca",
    htmlGoogleLink: '<a href="https://www.google.ca">Google Link</a>',
    inputDefaultText: "ie : wilson",
    counter: 0,
    x_position: 0,
    y_position: 0,
    inputText: "",
    A: 0,
    B: 0,
    available: false,
    conditionalText: "this text will show up if available is true",
    listOfNames: ["wilsonV", "John", "Bob"],
  },
  methods: {
    greeting: function(){
      return "greeting function is being called";
    },
    greetingWithParam: function(caller, msg){
      return "greetingWithParam is being called by " + caller + "message is " + msg;
    },
    addOne: function(){
      this.counter ++;
    },
    reset: function(){
      this.counter = 0;
    },
    addTen: function(){
      this.counter += 10;
    },
    changeAvailable: function(){
      this.available = !(this.available);
    },


    updateXY: function(Event){
      console.log(Event);
      this.x_position = Event.x;
      this.y_position = Event.y;
    },
    // Aplus20: function(){
    //   console.log("Aplus20");
    //   return this.A + 20;
    // },
    // Bplus20: function(){
    //   console.log("Bplus20");
    //   return this.B + 20;
    // }
  },
  computed:{
    Aplus20: function(){
      console.log("A plus 20");
      return this.A + 20;
    },
    Bplus20: function(){
      console.log("B plus 20");
      return this.B + 20;
    },
    myClassStyle: function(){
      return {myclassname: this.available};
    }
  }
});

var app2 = new Vue({
  el: '#vue-app-two',
  methods:{
    greetingFromApp2: function(){
      return "Hello message from second vue instance call app2";
    },
    accessingApp1Funtion: function(){
      return "app 2 is calling function from app 1 greeting function: " + app1.greeting();
    },
    showAtt: function(){

      this.refsName = this.$refs.myinputbox
      console.log(this.refsName);

    },
  },
});
