<template>
  <div class="bg">
    <div id="app1">
      <h1 class="vue-title"><b style="color: white">Issues List</b></h1>
      <div class="sub">
        <v-client-table :columns="columns" :data="issues" :options="options">
          <template slot="update" slot-scope="props" >
            <el-button round
              v-model="props.row.on"
              size=mini
              type="success"
              @click="handleSolved(1,props.row._id)"
            >
              solved
            </el-button>
            <el-button round
              v-model="props.row.on"
              size=mini
              type="warning"
              @click="handleUnsolved(0,props.row._id)"
            >
              unsolved
            </el-button>
          </template>
          <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteConfirm(props.row._id)"></a>
        </v-client-table>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
import IssueService from '@/services/IssueService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Issues',
  data () {
    return {
      // dialogVisible: false,
      props: ['_id'],
      issues: [],
      errors: [],
      columns: ['_id', 'category', 'text', 'status', 'update', 'remove'],
      options: {
        sortable: ['status'],
        headings: {
          _id: 'ID',
          category: 'Category',
          text: 'Body',
          status: 'Status'
        }
      }
    }
  },
  created () {
    this.loadIssues()
  },
  methods: {
    loadIssues: function () {
      IssueService.fetchIssues()
        .then(response => {
          // JSON responses are automatically parsed.
          this.issues = response.data
          console.log(this.issues)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    update: function (status, id) {
      IssueService.updateStatus(id, status)
        .then(response => {
          console.log(response)
          this.loadIssues()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    handleSolved: function (status, id) {
      this.$confirm('Do you want to set this issue to solved?', 'NOTICE', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Issue has successfully set to solved!'
        })
        this.update(status, id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    handleUnsolved: function (status, id) {
      this.$confirm('Do you want to set this issue to unsolved?', 'NOTICE', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Issue has successfully set to unsolved!'
        })
        this.update(status, id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    deleteConfirm: function (id) {
      this.$confirm('Do you want to delete this issue?', 'WARNING', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Issue has been successfully deleted!'
        })
        this.deleteIssue(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
      })
    },
    deleteIssue: function (id) {
      IssueService.deleteIssue(id)
        .then(response => {
          this.loadIssues()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .bg {
    height:100%;
    width:100%;
    position:absolute;
    background-image: url("../assets/4.png");;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .vue-title {
    margin-top: 0px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 0px;
  }
  #app1 {
    width: 80%;
    margin: 0 auto;
    color: #fffffb;
  }
  .sub {
    background:rgba(255,255,255,0.7);
  }

</style>
