import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { ImArrowRight } from 'react-icons/im';
import Select from '../../components/Select';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  DropArea,
  Actions,
} from './styles';

const Dashboard: React.FC = () => {
  const [language, setLanguage] = useState('');
  const [file, setFile] = useState();
  const [textFromFile, setTextFromFile] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const acceptedFiles = useCallback(
    async files => {
      if (files) {
        const acceptedFilesExtensions = /(\.bmp|\.jpg|\.png|\.pbm)$/i;
        const filePath = files[0].path;

        if (!acceptedFilesExtensions.exec(filePath)) {
          setFile(undefined);
          setError(true);
          return;
        }

        if (error) {
          setError(false);
        }

        setFile(files[0]);
      }
    },
    [error],
  );

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    try {
      const data = new FormData();
      if (file) {
        data.append('image', file);
      }

      data.append('language', language);

      const response = await api.post('/process', data);

      setTextFromFile(response.data);
    } catch {
      setTextFromFile(['Occoreu um erro no processamento tente novamente']);
    } finally {
      setLoading(false);
    }
  }, [file, language]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <button type="button">Login</button>
        </HeaderContent>
      </Header>
      <Content>
        <div>
          <Dropzone onDrop={e => acceptedFiles(e)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <DropArea error={error} {...getRootProps()}>
                  <input {...getInputProps()} />
                  {file ? (
                    <p>{file.path}</p>
                  ) : (
                    <p>Arraste um arquivo ou clique para escolher</p>
                  )}
                  {error && (
                    <p>Formatos suportados [ .bmp, .jpg, .png, .pbm ]</p>
                  )}
                </DropArea>
              </section>
            )}
          </Dropzone>
          <Actions>
            <Select
              name="language"
              value={language}
              onChange={e => setLanguage(e.target.value)}
              options={[
                { value: 'por', label: 'português' },
                { value: 'eng', label: 'inglês' },
              ]}
            />
            <button
              type="button"
              disabled={language === '' || file === undefined}
              onClick={handleSubmit}
            >
              Enviar
            </button>
          </Actions>
        </div>

        <div>
          <ImArrowRight size={24} color="#2176ff" />
          {loading && <strong>Processando...</strong>}
        </div>

        <div>
          <textarea readOnly value={textFromFile} />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
