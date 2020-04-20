<template>
    <div class="cardConvert">
        <ion-card>
            <ion-card-content>
                <ion-text>
                    <h3>{{latestConvert.from.value}} {{latestConvert.from.currency}}</h3>
                    <h1>{{latestConvert.to.value}} {{latestConvert.to.currency}}</h1>
                </ion-text>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script>
    export default {
        name: 'CardConvert',
        props: ['latestConvert'],
        data() {
            return {}
        },
        methods: {},
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
