<template>
    <div class="card">
        <div class="row">
            <div class="col-xl-3 col-lg-4">
                <img :src="image" alt="" class="card-img img-fluid p-1">
            </div>
            <div class="col-xl-9 col-lg-8">
                <div class="card-body">
                    <h4 class="card-title">{{ title }}</h4>
                    <h6 class="card-subtitle">{{ formattedDate }}</h6>
                    <p class="card-text text-truncate">{{text}}</p>
                    <router-link :to="`/article/${id}`" class="btn btn-primary">
                        Číst dále
                        <em class="bi-play"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preview",
    props: {
        id: Number,
        title: String,
        date: String,
        text: String,
        image: String
    },
    computed: {
        formattedDate() {
            return new Date(this.date).toLocaleDateString();
        }
    }
}
</script>

<style scoped>

</style>
