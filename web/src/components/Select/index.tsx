import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, options, ...rest }) => {
  return (
    <Container>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma linguagem
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
