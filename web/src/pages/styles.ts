import styled from 'styled-components';

interface DropAreaProps {
  error?: boolean;
}

export const Container = styled.div``;

export const Header = styled.div`
  height: 60px;
  background: #2176ff;
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 1280px;
  height: 60px;

  padding: 5px 0;
  position: absolute;

  button {
    width: 100px;
    height: 40px;
    position: relative;
    left: calc(100% - 100px);
    top: calc(50% - 20px);

    border: 2px solid #fff;
    border-radius: 10px;

    background: transparent;
    font-weight: bold;
    font-size: 20px;
    color: #fff;

    transition: background 0.2s linear;

    &:hover {
      background: #005ff7;
    }
  }
`;
export const Content = styled.div`
  margin: auto;

  width: 1280px;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 500px 280px 500px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  textarea {
    min-width: 500px;
    max-width: 500px;
    min-height: 300px;
    max-height: 300px;
    padding: 8px;

    font-size: 14px;
  }
`;

export const DropArea = styled.div<DropAreaProps>`
  width: 500px;
  height: 260px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  cursor: pointer;
  border: dashed 2px ${props => (props.error ? 'red' : '#333')};
  border-radius: 20px;

  p {
    color: ${props => (props.error ? 'red' : '#333')};
  }
`;

export const Actions = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    width: 150px;
    height: 30px;
    padding: 5px;
    background: #2176ff;

    border: 1px solid #333;
    border-radius: 5px;

    color: #fff;
    font-weight: bold;

    transition: background 0.2s linear;

    &:hover {
      background: #005ff7;
    }
  }
`;
