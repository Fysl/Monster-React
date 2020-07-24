import React from 'react'

import '../Search-Box/search-box.styles.css';

export const SearchBox =({placeholder,handlechange})=>{
    return(
        <input 
        className='search'
        type='search'
        placeholder={placeholder}
         onChange={handlechange}
         
       
        />
    )

}