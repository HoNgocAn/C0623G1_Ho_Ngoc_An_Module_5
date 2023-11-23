
function CreateBook(){
    return (
        <div className="container">

            <form className="mt-3">
                <table className="table table-mt-3">
                <input type="text"/> Tittle<br/>
                <input type="text"/> Quantity<br/>
                <button className="btn btn-success" type="submit">Add</button>
                </table>
            </form>



        </div>
    )
}
export default CreateBook;