<template>
    <div class="row">
        <div class="col">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" placeholder="Title"/>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <label class="form-label">Te</label>


            <textarea class="form-control" rows="5"></textarea>
        </div>

    </div>
<NewArticle></NewArticle>

</template>

<script>
import NewArticle from "@/components/NewArticle.vue";

export default {
    name: "NewArticleView",
    components:{NewArticle}

}
</script>

<style scoped>

</style>
