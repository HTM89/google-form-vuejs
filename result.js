var app = new Vue({
   el: '#app',
   data: {
      name1: "", 
      message: '',
      checkedNames: [],
      picked: '',
      selected: '',
   },
   mounted () {
      this.getData()
   },
   methods: {
      getData(){
         const data = JSON.parse(localStorage.getItem('data'));
         this.name1 = data.name;
         this.message = data.message;
         this.checkedNames = data.checkedNames;
         this.picked = data.picked;
         this.selected = data.selected;
      }
   }   
});
