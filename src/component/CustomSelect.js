import React from 'react'
import Select from 'react-select'
import styled from 'styled-components';


const Selects = styled.div`
    --antd-wave-shadow-color:black;
`

function CustomSelect({options}){
    return (<Selects style={{width: "200px", height: "100px", marginRight:"50px", color:"black !important", borderColor:"black !important"}}>
        <Select options={options} style={{boxShadow: "none", bordered:"False"}}/>
    </Selects>)
}

export default CustomSelect;