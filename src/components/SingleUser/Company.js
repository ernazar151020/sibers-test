import React from 'react'
import { Title } from './styledComponents/Title'
import {BiBuilding , BiMinusCircle} from "react-icons/bi"
import {AiFillSound , AiOutlineThunderbolt , AiOutlineDown} from "react-icons/ai"
import {BsGeoAlt} from "react-icons/bs"
import {GrAddCircle} from "react-icons/gr"
import {RiArrowUpSLine} from "react-icons/ri"

const Company = ({company}) => {
    return (
        <div className='company'>
        <Title>Company :</Title>
        <ul>
            <li><BiBuilding/>{company?.name}</li>
            <li><AiFillSound/>{company?.catchPhrase}</li>
            <li><AiOutlineThunderbolt/>{company?.bs}</li>
        </ul>
        </div>
    )
}

export default Company
