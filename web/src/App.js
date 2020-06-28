import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './Components/DevForm';
import DevItem from './Components/DevItem';

// Componente = Função que retorna um conteúdo html
// Estado = Informações mantidas pelo componente
// Propriedade =Informações que um componente PAI passa para o componente FILHO

function App() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');

            setDevs(response.data);
        }

        loadDevs();
    }, []);

    async function handleAddDev(data) {
        const response = await api.post('/devs', data);

        setDevs([...devs, response.data]);
    }

    async function handleDeleteDev(github_username) {
        alert(`O dev ${github_username} foi deletado`);

        await api.delete(`/delete?github_username=${github_username}`);

        const response = await api.get('/devs');

        setDevs(response.data);
    }

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <DevForm onSubmit={handleAddDev} />
            </aside>

            <main>
                <ul>
                    {devs.map(dev => (
                        <DevItem deleteDev={handleDeleteDev} key={dev._id} dev={dev} />
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
