import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { BiBuilding, BiMinusCircle, BiUserCircle } from "react-icons/bi";
import {
	AiFillSound,
	AiOutlineThunderbolt,
	AiOutlineDown,
	AiOutlineLink,
	AiOutlinePhone,
	AiOutlineMail,
	AiOutlineEdit,
} from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import Address from "./Address";
import { Title } from "./styledComponents/Title";
import Company from "./Company";
import Modal from "../Modal/Modal";

const SingleUser = ({ singleUser }) => {
	const [modalActive, setModalActive] = useState(false);
	const [modalContent, setModalContent] = useState(null);
	const {
		accountHistory,
		address,
		avatar,
		company,
		email,
		favorite,
		id,
		name,
		phone,
		posts,
		username,
		website,
	} = singleUser;

// useCallback for memoizing functions

	const handleOpenModal = useCallback(
		(item) => {
			setModalActive(true);
			setModalContent(singleUser);
		},
		[modalActive],
	);

	const handleCloseModal = useCallback(() => {
		setModalActive(false);
		setModalContent(null);
	}, [modalActive]);

	return (
		<SingleUserWrapper>
			<div className='edit_button' onClick={handleOpenModal}>
				<AiOutlineEdit />
			</div>
			<div className='number_of_users'>{id}</div>
			<Avatar>
				<img
					src={
						"https://img.favpng.com/23/20/21/computer-icons-icon-design-person-download-png-favpng-NfUiqmSd4C12cJv3avzSf3enN.jpg"
					}
				/>
			</Avatar>
			<Title>
				<BiUserCircle />
				Name : <span>{name}</span>
			</Title>
			<Title>
				<FaUserCheck />
				Username : <span>{username}</span>
			</Title>
			<Title>
				<AiOutlinePhone />
				Phone :{" "}
				<a target='_blank' href={`tel:${phone}`} rel='noreferrer'>
					{phone}
				</a>
			</Title>
			<Title>
				<AiOutlineMail />
				Email :{" "}
				<a target='_blank' href={`mailto:${email}`} rel='noreferrer'>
					{email}
				</a>
			</Title>
			<Title>
				<AiOutlineLink />
				Website :{" "}
				<a target='_blank' href={website} rel='noreferrer'>
					{website}
				</a>
			</Title>
			<Company company={company} />
			<Address address={address} />

			<Modal
				modalActive={modalActive}
				handleCloseModal={handleCloseModal}
				modalContent={modalContent}
			/>
		</SingleUserWrapper>
	);
};

export default SingleUser;

const Adress = styled.div`
	box-shadow: 0px 1px 0px 0px #0a0a0a;
	cursor: pointer;
	.header {
		display: flex;
		align-items: center;
		text-align: center;
	}
	ul {
		margin-left: 20px;
	}
	.show_more_button {
		margin-top: 5px;
		margin-left: 10px;
	}
`;

const Avatar = styled.div`
	width: 30px;
	height: 30px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
`;

const SingleUserWrapper = styled.li`
	list-style: none;
	margin: 10px;
	background-color: #ffc222;
	position: relative;
	padding: 15px;
	cursor: pointer;
	transition: all 0.3s ease;
	:hover {
		box-shadow: 1px 1px 1px 1px #0a0a0a;
		.edit_button {
			display: flex;
		}
	}
	.edit_button {
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 100;
		width: 30px;
		height: 30px;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 2px solid #0a0a0a;
		cursor: pointer;
		display: none;
		transition: all 0.3s ease;
		:hover {
			background-color: #0a0a0a;
			transition: all 0.3s ease;

			svg {
				color: #fff;
			}
		}
		svg {
			font-size: 20px;
			color: #0a0a0a;
		}
	}
	ul {
		margin-left: 20px;
		font-size: 14px;
		li {
			svg {
				margin-right: 7px;
			}
		}
	}

	.number_of_users {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		width: 30px;
		position: absolute;
		background-color: red;
		top: -10px;
		left: 50%;
		border-radius: 50%;
		border: 3px solid #fff;
	}
`;
