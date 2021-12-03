import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/download.jpeg';

import Header from './components/Header'

function App() {
    const [projects, setProjects]= useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        // setProjects([... projects, `Novo Projeto ${Date.now()}`]);
        const response = await api.post('/projects', {
            title: `Front-end com ReactJS ${Date.now()}`,
            owner: 'Yuri Berezin',
        });

        const project = response.data;

        setProjects([... projects, project]);
    }

    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <img src={backgroundImage}/>
            <Header title="Projects">
                <ul>
                    {projects.map(project => <li key={project.title}>{project.title}</li>)}
                </ul>
                <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
            </Header>
        </>
    );
}

export default App;