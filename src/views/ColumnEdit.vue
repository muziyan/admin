<template>
    <div class="column">
        <div class="title">栏目{{id ? "编辑" : "添加"}}</div>
        <el-form rel="form" @submit.native.prevent="save()" style="margin-top:30px;" >
            <el-form-item label="栏目名称" >
                <el-input v-model="model.name" placeholder="请输入栏目名称"></el-input>
            </el-form-item>
            <el-form-item label="栏目描述">
                <el-input type="textarea" v-model="model.description"  placeholder="请输入栏目描述"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Column",
        props:{
            id:{},
        },
        data(){
            return {
                model:{}
            }
        },
        methods:{
            async save(){
                let res;
                if(this.id){
                    res = await this.$http.put(`rest/columns/${this.id}`,this.model);
                }else{
                    res = await this.$http.post("rest/columns",this.model);
                }
                this.$router.push('/column/list');
                this.$message({
                    type:"success",
                    message:"创建成功!"
                })
            },
            async fetch(){
                let res = await this.$http.get(`rest/columns/${this.id}`);
                this.model =  res.data;
            },
            Judge(status){
                return status === 0 ? "超级管理员" : status === 1 ? "高级管理员" : "普通管理员";
            }
        },
        created(){
            this.model = {};
            this.id && this.fetch();
        }
    }
</script>

<style scoped>

</style>