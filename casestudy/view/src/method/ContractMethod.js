import axios from "axios";

export const getAllContract = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/contract")
        return rs.data
    }catch (e){
        return undefined
    }
}

export const deleteContract = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/${id}`);
        return true;
    } catch (e) {
        return false;
    }
};

export const saveContract = async (contract) => {
    try {
        await axios.post("http://localhost:8080/contract", contract);
        return true;
    } catch (e){
        return false;
    }
}