    <template>
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h3>New Article</h3>
                </div>
                <hr/>
                <div class="card-text"></div>
            <div class="row mb-3">
                <div class="col">
                    <label class="form-label">Title</label>
                    <input v-model="text" type="text" class="form-label" placeholder="Title"/>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label class="form-label">Text</label>
                    <textarea v-model="text" class="form-control" rows="5"></textarea>
                </div>
            </div>
                <div class="mb-3">
                    <div class ="col">
                    <label class="form-label">Image</label>
                    <input @change="onImage" class="form-control" type="file" id="file">
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn float-end btn-primary "><em class="bi-check"/></button>

            </div>
        </div>
    </template>

    <script>
    export default {
        name: "NewArticleView",
        data() {
            return {

                title: null,
                text: null,
                image: null
            }
        },
        methods:{
            onImage(e){
                //TODO PARSE IMAGE
            }
        }

    }
    </script>

    <style scoped>

    </style>
