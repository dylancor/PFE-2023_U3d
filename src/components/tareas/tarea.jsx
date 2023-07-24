import React, { useState } from 'react'
import Agregartareafragment from './Fragmentos/Agregartareafragment'
import Mostrartareafragment from './Fragmentos/mostrartareafragment'
const listaEjemplo=[
    {
        id:1,
        nombre:' Alimentar a los leones'
    },
    {
        id:2,
        nombre:'jugar con las quimeras'
    },
    {
        id:3,
        nombre:'mimir'
    }
]

const tareas = () => {
    const[tareas,setTareas]= useState(listaEjemplo)
    const[nombreTarea,setNombreTarea]=useState('')

    const handleModificarTarea = (evento)=>{
        console.log(evento.target.value)
        setNombreTarea(evento.target.value)

    }

    const handleBotonAgregarTarea =(evento)=>{
        if (nombreTarea === ''){
            alert('debes escribir una tarea')
        }else{
        let tareaNueva ={
            id: tareas.length+1,
            nombre:nombreTarea
        }
        setTareas([...tareas,tareaNueva])
        setNombreTarea('')
    }
}

    const handleEliminarTarea = (id) => {
        let Tareasfiltradas = tareas.filter(Tarea => {
            return Tarea.id !== id
        })
        setTareas(Tareasfiltradas)
    }
   

    return (
        <>

        <div className='row'>
            <div className='col-12'>
                <h1>Tareas</h1>
            </div>
            <Agregartareafragment
            nombreTarea={nombreTarea}
            handleModificarTarea={handleModificarTarea}
            handleBotonAgregarTarea={handleBotonAgregarTarea}/>
            
            <div className='col-12 mt-4'>
                <h2>lista tarea</h2>
            </div>
            <Mostrartareafragment
            tareas={tareas}
            handleEliminarTarea={handleEliminarTarea}/>
        </div>
        
        </>
    )
}


export default tareas