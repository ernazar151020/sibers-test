import React from 'react'
import styled from 'styled-components';
import SerchInput from "./SearchInput"
import Sort from './Sort';
import {BsTable , BsCardList} from "react-icons/bs"


const UserTableHeader = ({tableView , handleSwitchView}) => {
    return (
        <UserTableHeaderWrapper>
          
            <SerchInput/>
            <div className="buttons">
<BsTable className={tableView && "active"} onClick={handleSwitchView}/>
<BsCardList className={!tableView && "active"} onClick={handleSwitchView}/>
            </div>
            <Sort/>
        </UserTableHeaderWrapper>
    )
}

export default UserTableHeader

const UserTableHeaderWrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
@media(max-width:767px){
    flex-wrap:wrap;
    justify-content:center;
}
/* width:100%; */

.buttons{
    display:flex;
    align-items:center;
    svg{
        font-size:30px;
        margin:0 10px;
        cursor:pointer;
    }
    .active{
        color:red;
    }
}
`


