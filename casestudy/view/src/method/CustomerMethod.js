import axios from "axios";

export const getAllCustomers = async () => {
    try {
        let res = await axios.get("http://localhost:8080/customer");
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/${id}`);
        return true;
    } catch (e) {
        return false;
    }
};

export const saveCustomer = async (customer) => {
    try {
        await axios.post("http://localhost:8080/customer", customer);
        return true;
    } catch (e){
        return false;
    }
}


export const findByIdCustomer = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8080/customer/${id}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}