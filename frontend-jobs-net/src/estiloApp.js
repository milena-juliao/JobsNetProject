import styled from "styled-components";

export const FormInput = styled.input`
    border: 2px solid #A9A9A9;
    border-radius: 10px;
    margin: 10px 0 20px 0;
    width: 400px;
    height: 25px;
`;

export const Campos = styled.div`
  
  
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-family: cursive;
  color: #FF8C00;
`;

export const ErrorSpan = styled.span`
  display: ${(props) => props.isError ? 'block' : 'none'};
  color: red;
`;

export const ContainerPai = styled.div`
  
`;

export const ContainerFilho = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const Botao = styled.button`
  width: 200px;
  height: 40px;
  position: absolute;
  margin: 20px 0 0 110px;
  border: 0.1px solid #f5af19;
  background: linear-gradient(to right, #f5af19, #f12711);
  border-radius: 10px;
  font-family: cursive;
  font-weight: 600;
  font-size: 18px;
`
export const DadosPessoais1 = styled.div`
  width: 410px;
  float: left;
  margin: 0px 40px 0px 0px
`

export const DadosPessoais2 = styled.div`
  width: 410px;
  float: right
`

export const Imagem = styled.img`
  width: 249px;
  margin: 0px 0px 50px 650px;
`