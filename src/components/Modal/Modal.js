import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FormContent from "./FormContent";

const Modal = ({ modalActive, handleCloseModal, modalContent }) => {


	if (!modalActive) return null;
	return ReactDOM.createPortal(
		<>
			<ModalWrapper onClick={handleCloseModal}>
				<ModalContent onClick={(e) => e.stopPropagation()}>
					<FormContent
						modalContent={modalContent}
						handleCloseModal={handleCloseModal}
					/>
				</ModalContent>
			</ModalWrapper>
		</>,
		document.getElementById("portal"),
	);
};

export default Modal;

const ModalWrapper = styled.div`
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	background-color: #fff;
	padding: 12px;
	z-index: 1000;
	width: 600px;
`;
