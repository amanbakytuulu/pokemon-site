import axios from 'axios';

const instanse = axios.create({
    baseURL: "https://simpleproject-415aa-default-rtdb.asia-southeast1.firebasedatabase.app"
})


const itemsAPI = {
    getItems: () => {
        return instanse.get('.json');
    },
    addItem: (obj) => {
        return instanse.put(obj.id + '.json', obj);
    },
    deleteItem: (id) => {
        return instanse.delete(id + '.json');
    },
    updateItem: (obj) => {
        return instanse.put(obj.id + '.json', { ...obj, isFavorite: !obj.isFavorite })
    }
}
export default itemsAPI;