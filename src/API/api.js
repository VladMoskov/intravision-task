import axios from "axios";

export const tasksAPI = {

    getTasks: ()=> {
        axios.get('http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=f820a790-7c19-4f17-8856-f26836eb9a41')
            .then(res => {
                return res.value;
            })
    }
}
