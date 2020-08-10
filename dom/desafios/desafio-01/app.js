let app = new Vue({
    el: '#desafio',
    data: {
        name: 'Rodolpho',
        age: 30,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/pt/1/16/CR_Vasco_da_Gama_%C3%81frica_do_Sul.png'
    },
    methods: {
        ageAlt() {
            return this.age * 3
        }
    }
})