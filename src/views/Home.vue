<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Currency Converter</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-searchbar position="start"
                           placeholder="Montant EUR..."
                           v-bind:value="search"
                           @input="search = $event.target.value"
                           debounce="500"
                           type="number"
                           @ionChange="getSearchRest">
            </ion-searchbar>
            <div class="error" v-if="!$v.search.required">Field is required</div>


            <SelectCurrency v-if="!loadingRates"
                            :currencies="currencies">
            </SelectCurrency>

            <CardConvert v-if="latestConvert.isSet"
                         :latestConvert="latestConvert">
            </CardConvert>

        </ion-content>
    </ion-page>
</template>

<script>
    import CardConvert from '@/components/CardConvert.vue'
    import SelectCurrency from '@/components/SelectCurrency.vue'
    import axios from 'axios'

    import {required} from 'vuelidate/lib/validators'

    export default {
        name: 'Home',
        components: {
            CardConvert,
            SelectCurrency
        },
        data() {
            return {
                search: '',
                toCurrency: 'USD',
                currencies: {},
                loadingRates: true,
                latestConvert: {
                    isSet: false,
                    from: {
                        currency: 'EUR',
                        value: ''
                    },
                    to: {
                        currency: '',
                        value: ''
                    }
                }
            }
        },
        validations: {
            search: {
                required,
            }
        },
        created() {
            this.getCurrencies()
            this.$bus.$on('selectChange', event => {
                this.selectChange(event)
            })
        },
        methods: {
            getCurrencies() {
                let nowUrl = `http://data.fixer.io/api/latest?access_key=${process.env.VUE_APP_FIXER_API_KEY}`
                axios.get(nowUrl)
                    .then(search => {
                        console.log(search)
                        if (search.data.success) {
                            this.currencies = search.data.rates
                        }
                        this.loadingRates = false
                    })
                    .catch(error => {
                        console.log(error)
                        this.loadingRates = false
                    });
            },
            getSearchRest() {
                if (this.$v.search.required) {
                    this.latestConvert.from.value = this.search

                    this.latestConvert.to.currency = this.toCurrency
                    this.latestConvert.to.value = (this.search * this.currencies[this.toCurrency]).toFixed(2)
                    this.latestConvert.isSet = true
                    console.log(this.currencies[this.toCurrency])
                } else {
                    // this.loading = false
                }
            },
            selectChange(e) {
                this.toCurrency = e.detail.value
                this.getSearchRest()
            }
        },
    }
</script>

<style lang="scss">
    #shuffleContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .error {
        color: red;
    }

    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
