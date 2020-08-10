new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Botão clicado')
        },
        gravaValor(e) {
            this.valor = e.target.value
        }
    }
})