import FaixaDeModo from "./FaixadeModo"
import CategoriaModoLivre from "./CategoriaModoLivre";
import MenuLateralModoLivre from "./MenuLateralModoLivre";

import acoes from "./pranchasModoLivre/ComunicacaoGeral/acoes.png";
import interacao from "./pranchasModoLivre/ComunicacaoGeral/interacao.png";
import pessoas from "./pranchasModoLivre/ComunicacaoGeral/pessoas.png";
import soletrar from "./pranchasModoLivre/ComunicacaoGeral/soletrar.png";
import palavras from "./pranchasModoLivre/ComunicacaoGeral/palavras-essenciais.png"

import ajudaEscola from "./pranchasModoLivre/Educacao/ajuda-na-escola.png"
import alfabeto from "./pranchasModoLivre/Educacao/alfabeto.png"
import animais from "./pranchasModoLivre/Educacao/animais.png"
import espacosEscola from "./pranchasModoLivre/Educacao/espacos-da-escola.png"
import numeros from "./pranchasModoLivre/Educacao/numeros.png"

import bebidas from "./pranchasModoLivre/Alimentacao/bebidas.png"
import comidas from "./pranchasModoLivre/Alimentacao/comidas.png"
import frutas from "./pranchasModoLivre/Alimentacao/frutas.png"
import refeicoes from "./pranchasModoLivre/Alimentacao/refeicoes.png"
import vegetais from "./pranchasModoLivre/Alimentacao/vegetais.png"

import nivelDor from "./pranchasModoLivre/CorpoSaude/nivel-de-dor.png"
import partesCorpo from "./pranchasModoLivre/CorpoSaude/partes-do-corpo.png"
import profissionaisSaude from "./pranchasModoLivre/CorpoSaude/profissionais-da-saude.png"
import saude from "./pranchasModoLivre/CorpoSaude/saude.png"
import sensacoes from "./pranchasModoLivre/CorpoSaude/sensacoes.png"

import banheiro from "./pranchasModoLivre/Lugares/banheiro.png"
import cozinha from "./pranchasModoLivre/Lugares/cozinha.png"
import estabelecimentos from "./pranchasModoLivre/Lugares/estabelecimentos.png"
import quarto from "./pranchasModoLivre/Lugares/quarto.png"
import sala from "./pranchasModoLivre/Lugares/sala.png"


const ComunicacaoGeral = [
  { titulo: "Ações", imagem: acoes },
  { titulo: "Interação", imagem: interacao },
  { titulo: "Pessoas", imagem: pessoas },
  { titulo: "Soletrar", imagem: soletrar },
  { titulo: "Palavras Essenciais", imagem: palavras},
];

const Educacao = [
{ titulo: "Ajuda na Escola", imagem: ajudaEscola},
{ titulo: "Alfabeto", imagem: alfabeto},
{ titulo: "Animais", imagem: animais},
{ titulo: "Espaços da Escola", imagem: espacosEscola},
{ titulo: "Números", imagem: numeros},
]

const Alimentacao = [
{ titulo: "Bebidas", imagem: bebidas},
{ titulo: "Comidas", imagem: comidas},
{ titulo: "Frutas", imagem: frutas},
{ titulo: "Refeições", imagem: refeicoes},
{ titulo: "Vegetais", imagem: vegetais},
]

const CorpoSaude = [
{ titulo: "Nivel de Dor", imagem: nivelDor},
{ titulo: "Partes do Corpo", imagem: partesCorpo},
{ titulo: "Profissionais da Saúde", imagem: profissionaisSaude},
{ titulo: "Saúde", imagem: saude},
{ titulo: "Sensações", imagem: sensacoes},
]

const Lugares = [
{ titulo: "Banheiro", imagem: banheiro},
{ titulo: "Cozinha", imagem: cozinha},
{ titulo: "Estabelecimentos", imagem: estabelecimentos},
{ titulo: "Quarto", imagem: quarto},
{ titulo: "Sala", imagem: sala},
]

const MenuItems = [
  { label: "Comunicação Geral", href: "#comunicacao-geral" },
  { label: "Educação", href: "#educacao" },
  { label: "Alimentação", href: "#alimentacao" },
  { label: "Corpo e Saúde", href: "#corpo-saude" },
  { label: "Lugares", href: "#lugares" },
];


export default function ModoLivre() {
  return (
    <div className="overflow-x-hidden"> 
      <FaixaDeModo texto="Modo Livre" cor="#58D68D" />
       <MenuLateralModoLivre items={MenuItems} />


      <CategoriaModoLivre
        id="comunicacao-geral"
        tituloSecao="Comunicação Geral"
        categorias={ComunicacaoGeral}
      />

      <CategoriaModoLivre
        id="educacao"
        tituloSecao="Educação"
        categorias={Educacao}
      />

      <CategoriaModoLivre
        id="alimentacao"
        tituloSecao="Alimentação"
        categorias={Alimentacao}
      />

      <CategoriaModoLivre
        id="corpo-saude"
        tituloSecao="Corpo e Saúde"
        categorias={CorpoSaude}
      />

      <CategoriaModoLivre
        id="lugares"
        tituloSecao="Lugares"
        categorias={Lugares}
      />
    </div>
  );
}
