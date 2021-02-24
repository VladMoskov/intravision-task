import axios from "axios";

const tenantguid = 'f820a790-7c19-4f17-8856-f26836eb9a41';

const instance = axios.create({
    baseURL: 'http://intravision-task.test01.intravision.ru/odata/',

})

export const tasksAPI = {

    getTasks: () => {
        return instance.get(`tasks?tenantguid=${tenantguid}`)
    }
}
