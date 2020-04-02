import React, {useState, useEffect} from 'react';

import './styles.css';
import '../../global.css';
import {FiPower} from 'react-icons/fi'
import {FiTrash2} from 'react-icons/fi'

import {Link, useHistory } from 'react-router-dom';

import logoimg from '../../assets/logo.svg'

import api from '../../services/api'



export default function Profile() { 
    const [incidents, setIncidents] = useState([])

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    async function handleDeleteIncident(id) {
        try {
          await api.delete(`incidents/${id}`, {
            headers: {
              Authorization: ongId
            }
          });
    
          setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
          alert("Erro ao deletar o caso");
        }
      }

    useEffect(() => {
        api.get('profile' , {
            headers: {
                Authorization : ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    function handlelogout(){
        localStorage.clear();
        history.push('/')
    }  

    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="Be the HEro" />
                <span>Bem vinda, {ongName} </span>
                <Link className="button" to='/incidents/new'>Cadastrar novo Caso</Link>
                <button onClick={handlelogout} type='button'>
                <FiPower size={18} color='#e02041'/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO:</strong>                        
                        <p>{incident.description}</p>
                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        { <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#E02041" />
                        </button> }
                    </li>
                ))}               
            </ul>
        </div>    
    )
}