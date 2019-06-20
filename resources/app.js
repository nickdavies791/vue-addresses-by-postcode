new Vue({
    el: '#app',
    data() {
        return {
            postcode: '',
            addresses: []
        }
    },
    methods: {
        findAddresses() {
            if (this.postcode != '') {
                axios.get('https://ws.postcoder.com/pcw/api-key-here/address/uk/'+this.postcode)
                    .then(response => (
                        this.addresses = response.data
                    ))
            }
        }
    }
})