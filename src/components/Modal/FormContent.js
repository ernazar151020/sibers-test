import React, {  useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/Context";
import { asyncLocalStorage } from "../../utils/basic";
const FormContent = ({ modalContent, handleCloseModal }) => {

	const { setFilteredUsers, users , setUsers  } = useGlobalContext();

	const [inputValue, setInputValue] = useState({
		name: modalContent?.name,
		username: modalContent?.username,
		phone: modalContent?.phone,
		email: modalContent?.email,
		website: modalContent?.website,
		company: modalContent?.company,
		address: modalContent?.address,
		...modalContent
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValue({ ...inputValue, [name]: value });
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
			const userIndex = users.findIndex((user) => +user.id === modalContent.id);
			const before = users.filter((user, index) => index < userIndex);
			const after = users.filter((user, index) => index > userIndex);
			const newUsers = [...before, inputValue, ...after];
			asyncLocalStorage.setItem("users" , newUsers)
		setFilteredUsers(newUsers)
		setUsers(newUsers)
			handleCloseModal();
	};


	return (
		<FormContentWrapper onSubmit={handleSubmit}>
			<FormContentInner>
				<InputGroup>
					<label htmlFor='name'>Name : </label>
					<input
						onChange={handleChange}
						name='name'
						id='name'
						value={inputValue.name}
					/>
				</InputGroup>
				<InputGroup>
					<label htmlFor='email'>Email : </label>
					<input
						onChange={handleChange}
						name='email'
						id='email'
						value={inputValue.email}
					/>
				</InputGroup>
				<InputGroup>
					<label htmlFor='username'>Username : </label>
					<input
						onChange={handleChange}
						name='username'
						id='username'
						value={inputValue.username}
					/>
				</InputGroup>
				<InputGroup>
					<label htmlFor='phone'>Phone : </label>
					<input
						onChange={handleChange}
						name='phone'
						id='phone'
						value={inputValue.phone}
					/>
				</InputGroup>
				<InputGroup>
					<label htmlFor='website'>Website : </label>
					<input
						onChange={handleChange}
						name='website'
						id='website'
						value={inputValue.website}
					/>
				</InputGroup>
			</FormContentInner>
			<ButtonWrap>
				<button type='submit'>Save</button>
			</ButtonWrap>
		</FormContentWrapper>
	);
};

export default FormContent;

const ButtonWrap = styled.div`
	text-align: right;
	button {
		outline: none;
		border: none;
		background-color: #ffc222;
		padding: 5px 10px;
		cursor: pointer;
	}
`;

const FormContentWrapper = styled.form`
	width: 100%;
`;

const InputGroup = styled.div`
	margin: 10px;
	display: flex;
	flex-direction: column;
	input {
		padding: 5px 10px;
	}
	label {
		cursor: pointer;
		margin-bottom: 10px;
	}
`;

const FormContentInner = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
