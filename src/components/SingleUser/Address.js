import React  , {useState} from 'react'
import styled from 'styled-components';
import {BiBuilding , BiMinusCircle} from "react-icons/bi"
import {AiFillSound , AiOutlineThunderbolt , AiOutlineDown} from "react-icons/ai"
import {BsGeoAlt} from "react-icons/bs"
import {GrAddCircle} from "react-icons/gr"
import { Title } from './styledComponents/Title';
import {RiArrowUpSLine} from "react-icons/ri"

const Address = ({address}) => {
    const {country ,state ,  zipcode ,streetA , streetB , streetC , streetD  , city} = address
    const [showAddress , setShowAddress] = useState(false)

    const handleShowAddres = ()=>{
        setShowAddress(!showAddress)
    }
    


    return (
        <AdressWrapper>
        <div className='header' onClick={handleShowAddres}>
    <Title> <BsGeoAlt/> Address  </Title>
    <div className='show_more_button' >{showAddress ? <RiArrowUpSLine/> : <AiOutlineDown />}</div>
        </div>
    {
        showAddress &&      <ul>
        <li><Title>Country : <span>{country}</span></Title></li>
        <li><Title>State : <span>{state}</span></Title></li>
        <li><Title>City : <span>{city}</span></Title></li>
        <li><Title>Zipcode : <span>{zipcode}</span></Title></li>
        <li><Title>StreetA : <span>{streetA}</span></Title></li>
        <li><Title>StreetB : <span>{streetB}</span></Title></li>
        <li><Title>StreetC : <span>{streetC}</span></Title></li>
        <li><Title>StreetD : <span>{streetD}</span></Title></li>
    </ul>
    }

    </AdressWrapper>
    )
}

export default Address

const AdressWrapper = styled.div`
box-shadow:0px 1px 0px 0px #0a0a0a;
cursor:pointer;
.header{
    display:flex;
    align-items:center;
    text-align:center;
}
ul{
    margin-left:20px;
}
.show_more_button{
    margin-top:5px;
    margin-left:10px;
}
`
