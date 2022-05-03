new Vue({
  el: '#app',
  data:{
    title:"Hello!",
    styleCSS:''
  },
  methods:{
    changeText(){
      this.title='Какой то новый текст' // this обращается к беременной  title на глобальном уровне
    }
  }
});
