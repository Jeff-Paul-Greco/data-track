
import axios from "axios"

export default {

    getStudents: function () {
        return axios.get("/api/students");
    },

    getStudent: function (id) {
        return axios.get("/api/students/" + id);
    },

    saveStudent: function (savedStudents) {
        return axios.post("/api/students", savedStudents);
    },

    deleteStudent: function (id) {
        return axios.delete("/api/students/" + id);
    }

}