<template>
    <div class="article">
        <div class="title">文章列表</div>
        <el-table :data="items" >
            <el-table-column prop="title" label="文章标题" width="100"></el-table-column>
            <el-table-column prop="parent.name" label="文章栏目"></el-table-column>
            <el-table-column prop="hit" label="文章热度"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="$router.push(`/article/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ArticleList",
        data(){
            return{
                items:[],
            }
        },
        methods:{
            async fetch(){
                let res = await this.$http.get("articles");
                this.items = res.data;
            },
            async remove(item){
                this.$confirm(`是否确定删除管理员${item.username}`,'提示',{
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确定删除',
                    cancelButtonText: '取消删除'
                })
                .then(()=>{
                    let res = this.$http.delete(`articles/${item._id}`);
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