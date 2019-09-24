<template>
    <div class="userList">
        <div class="title">栏目列表</div>
        <el-table :data="items" >
            <el-table-column prop="_id" label="ID" width="200"></el-table-column>
            <el-table-column prop="name" label="栏目名称" width="100"></el-table-column>
            <el-table-column prop="description" label="栏目描述"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="$router.push(`/column/edit/${scope.row._id}`)">编辑</el-button>
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
                let res = await this.$http.get("columns");
                this.items = res.data;
            },
            async remove(item){
                this.$confirm(`是否确定删除管理员${item.username}`,'提示',{
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定删除',
                    cancelButtonText: '取消删除'
                })
                .then(()=>{
                    let res = this.$http.delete(`columns/${item._id}`);
                    this.$message({
                        type:"success",
                        message:"删除成功!"
                    })
                    this.fetch()
                })
            }
        },
        created(){
            this.fetch();
        }
    }
</script>

<style scoped>

</style>