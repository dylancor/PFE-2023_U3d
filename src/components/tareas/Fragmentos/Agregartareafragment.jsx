import React, { useState } from 'react'

const Agregartareafragment = ({nombreTarea, handleModificarTarea, handleBotonAgregarTarea}) => {
    return (
        <>
        <div className='col-12'>
                <label htmlFor="nombre-tarea"> añadir nueva tarea</label>
                <input type="text" onChange={handleModificarTarea} className='form-control my-2' id='nombre-tarea' value={nombreTarea} />
                <button type='button' className='btn btn-primary mt-3' onClick={handleBotonAgregarTarea}>añadir</button>
            </div>
        </>
    )
}


export default Agregartareafragment