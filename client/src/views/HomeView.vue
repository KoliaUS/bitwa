<script>
import Article from "@/components/Article.vue";
import Preview from "@/components/Preview.vue";

export default {
    components: {Preview, Article},
    data() {
        return {
            articles: [
                {
                    image: 'https://www.letemsvetemapplem.eu/wp-content/uploads/2022/03/Mac-Studio-Studio-Display-3-1536x1023.jpg.webp',
                    title: "Mac Studio",
                    date: new Date(),
                    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
                },
                {
                    image: 'https://samsungmagazine.eu/wp-content/uploads/2022/01/hacker-ga09d64f38_1920-Large-255x196.jpeg.webp',
                    title: "Chyba v Androidu 12 umožňuje hacknout některé smartphony",
                    date: new Date(),
                    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
                },
                {
                    image: 'https://samsungmagazine.eu/wp-content/uploads/2017/02/Instagram-FB.png.webp',
                    title: "Instagram ukončuje další své samostatné aplikace",
                    date: new Date(),
                    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
                },
            ]
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2  pb-3 pt-3" v-for="article in articles">
            <Preview :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Preview>
        </div>
    </div>
</template>
