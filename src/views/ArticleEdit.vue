<template>
    <div class="article">
        <div class="title">文章{{id ? "编辑" : "添加"}}</div>
        <el-form rel="form" @submit.native.prevent="save()" style="margin-top:30px;" >
            <el-form-item label="文章标题" >
                <el-input v-model="model.title" placeholder="请输入栏目名称"></el-input>
            </el-form-item>
            <el-form-item label="文章栏目">
                <br>
                <el-select v-model="model.parent">
                    <el-option v-for="parent in parents" :key="parent._id" :label="parent.name" :value="parent._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="文章热度">
                <br>
                <el-input v-model="model.hit" style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <br>
                <div id="main">
                    <mavon-editor v-model="model.content"/>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Article",
        props:{
            id:{},
        },
        data(){
            return {
                model:{
                    title:"",
                    parent:"",
                    hit:"",
                    content:"",
                    dateTime:new Date("Y-m-d H:i:s"),
                },
                parents:[]
            }
        },
        methods:{
            async save(){
                let res;
                if(this.id){
                    res = await this.$http.put(`articles/${this.id}`,this.model);
                }else{
                    res = await this.$http.post("articles",this.model);
                }
                this.$router.push('/article/list');
                this.$message({
                    type:"success",
                    message:"创建成功!"
                })
            },
            async fetch(){
                let res = await this.$http.get(`articles/${this.id}`);
                console.log(res)
                this.model =  res.data;
            },
            async fetchParentOptions(){
                const res = await this.$http.get("columns");
                this.parents = res.data;
            }
        },
        created(){
            this.model = {};
            this.fetchParentOptions();
            this.id && this.fetch();
        }
    }
</script>

<style scoped>

</style>