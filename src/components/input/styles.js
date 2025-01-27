
import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 28.188rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;  /* Menor margem para melhor controle do layout */
    border-radius: 2rem;
    position: relative; /* Necessário para posicionar a bola */
    margin-bottom: 30px;
    
`;

export const IconConteiner = styled.div`
    margin-right: 10px;
`;

export const ErrorMessage = styled.p`
   color: red;
  font-size: 0.875rem;
  bottom: -25px; /* Remove margens padrão */
  left: 15px;
  /* margin: 0; */
  margin-bottom: -1rem;
  text-align: left; /* Alinha o texto à esquerda */
  position: absolute;
`;

export const InputText = styled.input`
    color: hsl(0, 6%, 24%);
    border: 0;
    width: 100%;
    height: 3.25rem;
    font-size: 1.5rem;
    padding: .5rem;
    outline: none; /* Remove a borda ao focar no campo */
    border-radius: 2rem;
    border: 2px solid hsl(0, 36%, 70%);

    /* Estilizando o texto do placeholder */
    &::placeholder {
        color: hsl(0, 36%, 70%);
        font-style: italic;
    }

    &:focus {
        border: 1px solid hsl(0, 93%, 68%); /* Borda ao clicar no input */
        outline: none;
    }
`;

export const Ball = styled.div`
    width: 6.25rem;
    height: 4.45rem;
    border-radius: 2rem;
    position: absolute;
    right: -8px;
    background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 2rem;
        height: 2rem;
        background-image: url('/img/icon-arrow.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 57.80%, 82.40%));
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

        &::after {
            filter: brightness(1.2);
        }
    }
`;

export const ErrorIcon = styled.div`
  position: absolute;
  right: 100px; /* Posiciona no canto direito */
  top: 50%; /* Centraliza verticalmente */
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('/img/icon-error.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;