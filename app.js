var app = new Vue({
   el: '#app',
   data: {
      name: "", 
      message: '',
      checkedNames: [],
      picked: '',
      selected: '',
   },
   methods: {
      saveData() {
         localStorage.data = JSON.stringify({
            name : this.name,
            message : this.message,
            checkedNames : this.checkedNames,
            picked : this.picked,
            selected : this.selected,
         });
         window.location.href = '/result.html';

      }
   }   
});
