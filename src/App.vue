<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="container" style="margin-left: 3rem; margin-right: 3rem;">
    <DataTable :value="products" tableStyle="margin:auto">
      <Column field="code" header="Card ID"></Column>
      <Column field="datetime" header="Date Time"></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// let data = [ ]

export default {
  name: 'App',
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      products: [],
    }
  },
  mounted(){
    const intervalID = setInterval(async () => {
    const response = await fetch('http://localhost:3000');
    let responseData = await response.json();
    if(responseData.data !== ""){
      this.products.push({code:responseData.data, datetime:this.getNow()})
    }
    console.log('response: ', responseData);
    return () => { 
      clearInterval(intervalID);
    };
    }, 500);
  },
  methods: {
      getNow: function() {
          const today = new Date();
          const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          const dateTime = date +' '+ time;
          return dateTime;
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
