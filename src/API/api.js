import axios from "axios";

const tenantguid = 'f820a790-7c19-4f17-8856-f26836eb9a41';

const instance = axios.create({
    baseURL: 'http://intravision-task.test01.intravision.ru/',

})

export const tasksAPI = {

    getTasks: () => {
        return instance.get(`odata/tasks?tenantguid=${tenantguid}`)
    },

    getPriorityes: () => {
        return instance.get(`api/${tenantguid}/Priorities`)
    },

    getStatuses: () => {
        return instance.get(`api/${tenantguid}/Statuses`)
    },

    postNewTask: (body) => {
        return instance.post(`/api/${tenantguid}/Tasks`, body)
    },

    putTaskChanges: (body) => {
        return instance.post(`/api/${tenantguid}/Tasks`, body)
    },

    getUsers: () => {
        return instance.get(`api/${tenantguid}/Users`)
    },

    getTask: (taskID) => {
        return instance.get(`/api/${tenantguid}/Tasks/${taskID}`)
    }
}
