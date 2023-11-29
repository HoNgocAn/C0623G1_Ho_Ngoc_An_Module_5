
import axios  from "axios";

export const getAllService = async () => {
    try {
        let res = await axios.get("http://localhost:8080/service");
        return res.data
    } catch (e){
        return undefined;
    }

}
export const deleteService = async () => {
    try{
        await  axios.delete(`http://localhost:8080/service/${id}`);
        return true
    }catch (e){
        return false;
    }
}