import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import {asyncLocalStorage} from "../utils/basic";

const AppContext = createContext();

const Context = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [isLoading , setIsLoading] = useState(false)
	const [modalActive, setModalActive] = useState(false);




	const fetchUsers = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get("https://demo.sibers.com/users");
			asyncLocalStorage.setItem("users" , response.data)
			const data = await asyncLocalStorage.getItem("users")
			setUsers(data)
			setFilteredUsers(data)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(true)
			console.log(error, "error");
		}
	};


	useEffect(() => {
		fetchUsers();
	}, []);


  

    

	return (
		<div>
			<AppContext.Provider
				value={{ setUsers, users, filteredUsers, setFilteredUsers  , isLoading}}
			>
				{children}
			</AppContext.Provider>
		</div>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export default Context;
