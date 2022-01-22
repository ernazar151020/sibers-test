import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/Context";

const Sort = () => {
	const [selectedValue, setSelectedValue] = useState("id");
	const { setFilteredUsers,  filteredUsers } = useGlobalContext();

	const handleSelect = (e) => {
		setSelectedValue(e.target.value);
	};

	useEffect(() => {
		let result = [...filteredUsers];
		if (selectedValue === "id") {
			result = result.sort((a, b) => a.id - b.id);
		}
		if (selectedValue === "-id") {
			result = result.sort((a, b) => b.id - a.id);
		}
		if (selectedValue === "name") {
			result = result.sort((a, b) => a.name.localeCompare(b.name));
		}
		if (selectedValue === "-name") {
			result = result.sort((a, b) => b.name.localeCompare(a.name));
		}
		setFilteredUsers(result);
	}, [selectedValue]);

	return (
		<SortWrapper>
			<select value={selectedValue} onChange={handleSelect} name="sort">
				<option value='id'>Sort by id</option>
				<option value='-id'>Sort by id(reverse)</option>
				<option value='name'>Sort by name</option>
				<option value='-name'>Sort by name (reverse)</option>
			</select>
		</SortWrapper>
	);
};

export default Sort;

const SortWrapper = styled.div``;
