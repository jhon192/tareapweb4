import axios from 'axios'
import React, { useState, Fragment, useEffect } from 'react'
import Agenda from './components/agenda'
import Data from './components/data'

const App = () => {

    const [Info, setInfo] = useState([{}])
    
    const getDatos = () => {
        setInfo([])
        axios('https://www.raydelto.org/agenda.php/')
        .then((result) => {
            const { data } = result;
            data.map((value) => (
                setInfo(x => [...x, {
                    nombre: value.nombre,
                    apellido: value.apellido,
                    telefono: value.telefono
                }])
            ))
        }).catch((err) => {
            console.log(err);
        });    
    }

    const postData = e => {
        e.preventDefault();
        const { nombre, apellido, telefono } = e.target
        axios({
            method: 'POST',
            url: 'https://www.raydelto.org/agenda.php/',
            data: {
                nombre: nombre.value,
                apellido: apellido.value,
                telefono: telefono.value
            }
        }).then((result) => {
            console.log('Datos Enviados');
        }).catch((err) => {
            console.log('Error!!');
        });
    }

    const searchData = e => {
        setInfo([])
        e.preventDefault()
        const { data } = e.target

        if (data.value === '') {
            getDatos()
        }else{
            Info.filter(x => x.nombre === data.value || x.apellido === data.value || x.telefono === data.value).map((value) =>(
                setInfo(x => [...x, {
                    nombre: value.nombre,
                    apellido: value.apellido,
                    telefono: value.telefono
                }])
            ))
        }
    }
    
    

    useEffect(() => {
        getDatos()
    }, [])
    

    return (
        <Fragment>
            <div className="root">
                <div className="container">
                    <Agenda postData={postData}/>
                </div>
                <div className="container2">
                    <Data Info={Info} searchData={searchData}/>
                </div>
            </div>
        </Fragment>
    )
}

export default App
