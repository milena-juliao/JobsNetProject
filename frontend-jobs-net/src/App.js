import { useState } from "react";
import axios from "axios";
import * as E from "./estiloApp";

const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`)
    setForm({...form, logradouro: address.data.logradouro});
    setForm({...form, cidade: address.data.localidade});
  };
  
  const createCandidate = async (candidate) => {
    try{
        const user = await axios.post('http://localhost:5000/register',form);
        if(user.status === 200){
          alert('Deu certo')
        }
    }catch(error){
      setCpfError(true);
    }
  }
  
  const [form, setForm] = useState({
    name: '',
    gender: '',
    nasc: '',
    cpf: '',
    estCivil: '',
    cep: '',
    logradouro: '',
    cidade: '',
    numero: '',
    celular: '',
    email: '',
    profissao: '',
    cargoPretend: ''
  });

  const [cpfError, setCpfError] = useState(false);

  return (
    <E.ContainerPai>
      <E.Imagem src="/logo.png" alt="JobsNet"></E.Imagem>

      <E.ContainerFilho>
        <E.DadosPessoais1>
          <E.Campos>
            <E.Label>Nome</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, name: e.target.value});}} value={form.name}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>Data de Nascimento</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, nasc: e.target.value});}} value={form.nasc}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>CPF</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, cpf: e.target.value});}} value={form.cpf}></E.FormInput>
            <E.ErrorSpan isError={cpfError}>Já há um cadastro com esse cpf.</E.ErrorSpan>
          </E.Campos>

          <E.Campos>
            <E.Label>Gênero</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, gender: e.target.value});}} value={form.gender}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>Estado Civil</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, estCivil: e.target.value});}} value={form.estCivil}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>CEP</E.Label>
            <E.FormInput onBlur={() => {fetchAddress()}} onChange={(e) => {setForm({...form, cep: e.target.value});}} value={form.cep}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>Logradouro</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, logradouro: e.target.value});}} value={form.logradouro}></E.FormInput>
          </E.Campos>
        </E.DadosPessoais1>
        
        <E.DadosPessoais2>
          <E.Campos>
            <E.Label>Cidade</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, cidade: e.target.value});}} value={form.cidade}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>Número</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, numero: e.target.value});}} value={form.numero}></E.FormInput>
          </E.Campos>
       
          <E.Campos> 
            <E.Label>Celular</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, celular: e.target.value});}} value={form.celular}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>E-mail</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, email: e.target.value});}} value={form.email}></E.FormInput>
            <E.ErrorSpan isError={cpfError}>Já há um cadastro com esse e-mail.</E.ErrorSpan>
          </E.Campos>

          <E.Campos>
            <E.Label>Profissão atual</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, profissao: e.target.value});}} value={form.profissao}></E.FormInput>
          </E.Campos>

          <E.Campos>
            <E.Label>Cargo pretendido</E.Label>
            <E.FormInput onChange={(e) => {setForm({...form, cargoPretend: e.target.value});}} value={form.cargoPretend}></E.FormInput>
          </E.Campos>

          <E.Botao onClick= {() => createCandidate(), <link></link>}>Cadastrar</E.Botao>
        </E.DadosPessoais2>
      </E.ContainerFilho>
    </E.ContainerPai>
  );
}

export default App;
