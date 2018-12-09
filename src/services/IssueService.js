import Api from '@/services/api'

export default {
  fetchIssues () {
    return Api().get('/issues')
  },
  postIssue (issue) {
    return Api().post('/issues', issue,
      { headers: {'Content-type': 'application/json'} })
  },
  updateStatus (id, status) {
    return Api().put(`/issues/${id}/${status}`)
  },
  deleteIssue (id) {
    return Api().delete(`/issues/${id}`)
  },
  validate (name, pass) {
    return Api().post(`/user/validate/${name}/${pass}`)
  },
  register (user) {
    return Api().post(`/user/register`, user,
      { headers: {'Content-type': 'application/json'} })
  },
  validateName (name) {
    return Api().post(`/user/validateName/${name}`)
  }
}
