Vue.component('my-cmp', {
    data: function (){
       return {
           name: 'Dante'
       }
    },
    template: '<p>Hello, {{ name }} </p>'
})

new Vue({
    el: '#app'
})
