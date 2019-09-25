<template>
    <div class="userEdit">
        <div class="title">管理员{{id ? "编辑" : "添加"}}</div>
        <el-form rel="form" @submit.native.prevent="save()" style="margin-top:30px;">
            <el-form-item label="管理员用户名" >
                <el-input v-model="model.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="管理员密码">
                <el-input type="password" v-model="model.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="管理员身份">
                <el-select v-model="model.status"  :key="model.status">
                    <el-option label="普通管理员" :value="2" :disabled="model.status === '2'" ></el-option>
                    <el-option label="高级管理员" :value="1" :disabled="model.status === '1'" ></el-option>
                    <el-option label="超级管理员" :value="0" :disabled="model.status === '0'" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "UserEdit",
        props:{
            id:{},
        },
        data(){
            return {
                model:{
                    username:"",
                    password:"",
                    status:null,
                }
            }
        },
        methods:{
            async save(){
                let res;
                if(this.id){
                    res = await this.$http.put(`rest/users/${this.id}`,this.model);
                }else{
                    res = await this.$http.post("rest/users",this.model);
                }
                this.$router.push('/user/list');
                this.$message({
                    type:"success",
                    message:"创建成功!"
                })
            },
            async fetch(){
                let res = await this.$http.get(`rest/users/${this.id}`);
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