import React from 'react';
import Dropzone from 'react-dropzone';
import { ImArrowRight } from 'react-icons/im';
import Select from '../components/Select';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  DropArea,
  Actions,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <button type="button">Login</button>
        </HeaderContent>
      </Header>
      <Content>
        <div>
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <DropArea {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Arraste um arquivo ou clique para escolher</p>
                </DropArea>
              </section>
            )}
          </Dropzone>
          <Actions>
            <Select
              name="language"
              value=""
              options={[
                { value: 'por', label: 'português' },
                { value: 'eng', label: 'inglês' },
              ]}
            />
            <button type="button">Enviar</button>
          </Actions>
        </div>

        <div>
          <ImArrowRight size={24} color="#2176ff" />
        </div>

        <div>
          <textarea />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
