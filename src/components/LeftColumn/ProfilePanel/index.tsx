import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/diego64.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Diego Ferreira</h1>
        <h2>Analista de Suporte JR @ JMM</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">142</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">85</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
