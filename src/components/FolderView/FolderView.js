import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/Context";
import styled from "styled-components";
import SingleUser from "../SingleUser/SingleUser";

const FolderView = () => {
	const { filteredUsers  , setFilteredUsers , setUsers} = useGlobalContext();

	if (!filteredUsers.length === 0) {
		return <h1>No data found</h1>;
	}

	return (
		<FolderViewWrapper>
			{filteredUsers?.map((items) => {
				return <SingleUser singleUser={items} key={items.id} />;
			})}
		</FolderViewWrapper>
	);
};

export default FolderView;

const FolderViewWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	@media(max-width:767px){
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
`;
