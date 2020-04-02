import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // useHistory serve para  manter logado.
import { FiLogIn } from 'react-icons/fi';
// import alertify from 'alertifyjs';

import api from '../../services/api';

import './styles.css';
// import './alertify.min.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id); // Salva localmente o login da Ong
            localStorage.setItem('ongName', response.data.name); // Salva localmente o nome da Ong
            history.push('/profile');
            console.log(response.data.name)
        } catch (err) {
        //   alertify.error('Oh oh! Parece que algo deu errado... tente novamente!');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt = "Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}