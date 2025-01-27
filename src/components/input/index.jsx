
import React, { useState } from 'react';
import { InputContainer, InputText, ErrorMessage, ErrorIcon, Ball } from './styles';

const Input = ({ leftIcon, name, ...rest }) => {
  const [hasError, setHasError] = useState(false);

  const handleBlur = () => {
    // Validação simples de email
    if (!rest.value || !/\S+@\S+\.\S+/.test(rest.value)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };

  return (
    <InputContainer>
      <Ball />
      {leftIcon && <div>{leftIcon}</div>}
      <InputText
        {...rest}
        name={name}
        onBlur={handleBlur}
        hasError={hasError}  // Passando a prop de erro
      />
      {hasError && (
        <>
          <ErrorMessage>Please provide a valid email</ErrorMessage>
          <ErrorIcon /> {/* Exibe o ícone de erro */}
        </>
      )}
    </InputContainer>
  );
};

export { Input };





