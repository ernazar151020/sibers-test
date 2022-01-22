import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/Context";
import { AiOutlineSearch } from "react-icons/ai";

const SerchInput = () => {
	const { setFilteredUsers, filteredUsers, users } = useGlobalContext();
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		let result = [];

		// filter by name **username **phone

		result = users.filter((data) => {
			return (
				data.name
					.toLocaleLowerCase()
					.search(search.toLocaleLowerCase()) != -1 ||
				data.username
					.toLocaleLowerCase()
					.search(search.toLocaleLowerCase()) != -1 ||
				data.phone
					.toLocaleLowerCase()
					.search(search.toLocaleLowerCase()) != -1
			);
		});
		setFilteredUsers(result);
	}, [search]);

	return (
		<SerchInputWrapper>
			<div className='input_group'>
				<input
					placeholder='Search by name , phone , username'
					name='search'
					value={search}
					onChange={handleSearch}
				/>
				<div className='search_icon'>
					<AiOutlineSearch />
				</div>
			</div>
		</SerchInputWrapper>
	);
};

export default SerchInput;

const SerchInputWrapper = styled.form`
	margin: 20px;
	width: 100%;

	input {
		padding: 5px 10px;
		width: 100%;
	}
	.input_group {
		position: relative;
		width: 350px;
		@media(max-width:767px){
			margin:0 auto;
			width: 250px;
		}
	}
	.search_icon {
		position: absolute;
		right: 0;
		font-size: 25px;
		top: 0px;
		right:10px;
	}
`;
