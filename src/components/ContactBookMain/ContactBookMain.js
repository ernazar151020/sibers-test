import React  , { useState , useCallback} from "react";
import { useGlobalContext  } from "../../context/Context";
import Loading from "../Loading/Loading";
import TableView from "../TableView/TableView";
import UserTableHeader from "../UserTableHeader/UserTableHeader";
import FolderView from "../FolderView/FolderView";

const ContactBookMain = () => {

	const [tableView , setTableView] =useState(true)

	const handleSwitchView = useCallback(()=>{
		setTableView(!tableView)
},[tableView])


const {isLoading} = useGlobalContext()

if(isLoading) return <Loading/>

let content = <FolderView/>

if(tableView){
	content = <TableView/>
}
	return (
		<div className='container'>
			<UserTableHeader handleSwitchView={handleSwitchView} tableView={tableView}/>
			{
				content
			}
		
		</div>
	);
};

export default ContactBookMain;
