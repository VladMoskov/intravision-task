import axios from "axios";

const tenantguid = 'f820a790-7c19-4f17-8856-f26836eb9a41';

const instance = axios.create({
    baseURL: 'http://intravision-task.test01.intravision.ru/',

})

export const tasksAPI = {

    getTasks: () => {
        return instance.get(`odata/tasks?tenantguid=${tenantguid}`)
    },

    postNewTask: (name, description) => {
        console.log('here');
        let body = {
            "name": name,
            "description": description
        }

        return instance.post(`/api/${tenantguid}/Tasks`, body)
    }
}
