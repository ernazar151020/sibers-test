import React, { useCallback, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/Context';
import Modal from '../Modal/Modal';
const SingleItem = ({item}) => {

    const [modalActive, setModalActive] = useState(false);
	const [modalContent, setModalContent] = useState(null);

    console.log(modalContent , "modalContent")
	const {
		email,
		id,
		name,
		phone,
		username,
	} = item;

// useCallback for memoizing functions

	const handleOpenModal = useCallback(
		() => {
            
			setModalActive(true);
			setModalContent({...item});
		},
		[modalActive],
	);

	const handleCloseModal = useCallback(() => {
		setModalActive(false);
		setModalContent(null);
	}, [modalActive]);

  return <Tr>
  <td>{id}</td>
  <td>{name}</td>
  <td>{email}</td>
  <td>{username}</td>
  <td>{phone}</td>
  <td>
  <div className='edit_button' onClick={handleOpenModal}>
				<AiOutlineEdit />
			</div>
            <Modal
				modalActive={modalActive}
				handleCloseModal={handleCloseModal}
				modalContent={modalContent}
			/>
  </td>
</Tr>
};

export default SingleItem;

const Tr = styled.tr`
.edit_button{
    cursor:pointer;
    svg{
        font-size:20px;
    }
}
`
