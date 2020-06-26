import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente = Função que retorna um conteúdo html
// Estado = Informações mantidas pelo componente
// Propriedade =Informações que um componente PAI passa para o componente FILHO

function App() {
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, [setLatitude, setLongitude]);

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input 
                            name="github_username" 
                            id="github_username" 
                            required 
                            value={github_username}
                            onChange={e => setGithubUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input 
                            name="techs" 
                            id="techs" 
                            required 
                            value={techs}
                            onChange={e => setTechs(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input 
                                type="number" 
                                id="latitude" 
                                required 
                                value={latitude}
                                onChange={e => setLatitude(e.target.value)} />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input 
                                type="number" 
                                id="longitude" 
                                required 
                                value={longitude} 
                                onChange={e => setLongitude(e.target.value)} />
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>

            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/43561537?s=460&u=986619dda0ec8491823c9427a92a387870d5d71a&v=4" alt="Henrique Guimarães"/>
                            <div className="user-info">
                                <strong>Henrique Guimarães</strong>
                                <span>ReactJS, Node, C#</span>
                            </div>
                        </header>
                        <p>I am a passionate IT student, aiming at becoming a full-stack developer.</p>
                        <a href="https://github.com/rique223">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/43561537?s=460&u=986619dda0ec8491823c9427a92a387870d5d71a&v=4" alt="Henrique Guimarães"/>
                            <div className="user-info">
                                <strong>Henrique Guimarães</strong>
                                <span>ReactJS, Node, C#</span>
                            </div>
                        </header>
                        <p>I am a passionate IT student, aiming at becoming a full-stack developer.</p>
                        <a href="https://github.com/rique223">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/43561537?s=460&u=986619dda0ec8491823c9427a92a387870d5d71a&v=4" alt="Henrique Guimarães"/>
                            <div className="user-info">
                                <strong>Henrique Guimarães</strong>
                                <span>ReactJS, Node, C#</span>
                            </div>
                        </header>
                        <p>I am a passionate IT student, aiming at becoming a full-stack developer.</p>
                        <a href="https://github.com/rique223">Acessar perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/43561537?s=460&u=986619dda0ec8491823c9427a92a387870d5d71a&v=4" alt="Henrique Guimarães"/>
                            <div className="user-info">
                                <strong>Henrique Guimarães</strong>
                                <span>ReactJS, Node, C#</span>
                            </div>
                        </header>
                        <p>I am a passionate IT student, aiming at becoming a full-stack developer.</p>
                        <a href="https://github.com/rique223">Acessar perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;
