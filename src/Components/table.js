import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import data from '../jsonData';

const Table = ()=>{

return <ReactFlexyTable data={data} />
}

export default Table;