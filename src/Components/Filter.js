import React from 'react'
import Rate from './Rate'
import { useState } from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function Filter({setsearch,setrating,rating} ) {



    return (
        <div className="baha" >
             <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="search Movie By Name"
      aria-label="Username"
      aria-describedby="basic-addon1"

      onChange = { (e)=> setsearch((e.target.value))}
    />
  </InputGroup>



            <Rate rating={rating} setrating={setrating} />
        </div>
    )
}

export default Filter
