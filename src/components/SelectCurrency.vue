<template>
    <div class="selectCurrency">
        <ion-grid>
            <ion-row>
                <ion-col size="5" class="flex-center">
                    <ion-text>
                        <h1 class="ion-no-margin">EUR</h1>
                    </ion-text>
                </ion-col>

                <ion-col size="2" id="shuffleContainer">
                    <!--                        <ion-icon name="repeat" size="large"></ion-icon>-->
                    <ion-icon name="shuffle" size="large"></ion-icon>
                </ion-col>

                <ion-col size="5">
                    <ion-item>
                        <ion-label>To</ion-label>
                        <ion-select ok-text="Okay"
                                    cancel-text="Nah"
                                    value="USD"
                                    @ionChange="selectChange($event)">
                            <ion-select-option v-for="(value, name, index) in currencies"
                                               :value="name">
                                {{name}}
                            </ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script>
    export default {
        name: "SelectCurrency",
        props: ['currencies'],
        data() {
            return {}
        },
        methods: {
            selectChange (e) {
                this.$bus.$emit('selectChange', e)
            }
        },
    }
</script>

<style scoped>

</style>
