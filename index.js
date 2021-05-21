import {Cliente} from "./Cliente.js"
import{Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import{SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 1000, 12345678900);
diretor.cadastrarsenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarsenha("123")
const cliente = new Cliente("Lais", 789456123, "456")
const Gerenteestalogado = SistemaAutenticacao.login(gerente,"123");
const Diretorestalogado = SistemaAutenticacao.login(diretor,"123456");
const Clienteestalogado = SistemaAutenticacao.login(cliente,"456");




console.log(Gerenteestalogado,Diretorestalogado,Clienteestalogado);


