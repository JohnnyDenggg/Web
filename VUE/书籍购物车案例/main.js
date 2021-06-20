const app = new Vue({
  el: "#app",
  data: {
    books:[
      {
        id:1,
        name:'《Python》',
        date:'2006-09',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《Java》',
        date:'2006-02',
        price:45.00,
        count:1
      },
      {
        id:3,
        name:'《C++》',
        date:'2008-10',
        price:65.00,
        count:1
      },
      {
        id:4,
        name:'《Golang》',
        date:'2006-03',
        price:113.00,
        count:1
      },
    ]
  },
  methods:{
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeHandle(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0
      for (let item of this.books){         //重点写法，直接遍历并取每一项
        totalPrice += item.price * item.count
      }
      return totalPrice
    }
  },
  filters:{
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  }
})