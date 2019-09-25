<template style="box-sizing: border-box">
    <div class="login">
        <el-form ref="form" class="form" @submit.native.prevent="login()" label-width="80px">
            <div class="title">登陆</div>
            <el-form-item label="用户名" style="margin-top:30px;">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="model.password" type="password"></el-input>
            </el-form-item>
            <el-button type="primary" native-type="submit">登陆</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                model:{},
            }
        },
        methods:{
            async login(){
                let res = await this.$http.post('login',this.model);
                localStorage.token = res.data.token;
                this.$router.push("/");
                this.$message({
                    type:"success",
                    message:"登陆成功!"
                })
            }
        }
    }
</script>

<style >
    *{
        margin:0;
        padding:0;
    }
    .login{
        width:100%;
        height:100vh;
        box-sizing: border-box;
        background:url("../assets/images/banner.jpg") ;
    }
    .form{
        width:300px;
        text-align:center;
        background:#fff;
        padding:30px;
        border-radius: 5px;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
</style>