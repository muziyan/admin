<template>
    <div class="userList">
        <div class="title">管理员列表</div>
        <el-table :data="items" >
            <el-table-column prop="_id" label="ID" width="200"></el-table-column>
            <el-table-column prop="username" label="管理员名称" width="100"></el-table-column>
            <el-table-column prop="password" label="管理员密码"></el-table-column>
            <el-table-column prop="status" label="管理员身份">
                <template slot-scope="scope">
                    {{Judge(scope.row)}}
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="$router.push(`/user/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data(){
            return{
                items:[],
            }
        },
        methods:{
            async fetch(){
                let res = await this.$http.get("users");
                this.items = res.data;
            },
            async remove(item){
                this.$confirm(`是否确定删除管理员${item.username}`,'提示',{
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定删除',
                    cancelButtonText: '取消删除'
                })
                .then(()=>{
                    let res = this.$http.delete(`users/${item._id}`);
                    this.$message({
                        type:"success",
                        message:"删除成功!"
                    })
                    this.fetch()
                })
            },
            Judge(item){
                let status = item.status;
                return status === 0 ? "超级管理员" : status === 1 ? "高级管理员" : "普通管理员";
            }
        },
        created(){
            this.fetch();
        }
    }
</script>

<style scoped>

</style>