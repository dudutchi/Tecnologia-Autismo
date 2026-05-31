import FaixaDeModo from "../components/FaixaDeModo"
import CategoriaModoLivre from "../components/CategoriaModoLivre";
import MenuLateralModoLivre from "../components/MenuLateralModoLivre";

import acoes from "../assets/pranchasModoLivre/ComunicacaoGeral/Acoes.png";
import interacao from "../assets/pranchasModoLivre/ComunicacaoGeral/interacao.png";
import pessoas from "../assets/pranchasModoLivre/ComunicacaoGeral/Pessoas.png";
import soletrar from "../assets/pranchasModoLivre/ComunicacaoGeral/Soletrar.png";
import palavras from "../assets/pranchasModoLivre/ComunicacaoGeral/palavras-essenciais.png"

import ajudaEscola from "../assets/pranchasModoLivre/Educacao/ajuda-na-escola.png"
import alfabeto from "../assets/pranchasModoLivre/Educacao/alfabeto.png"
import animais from "../assets/pranchasModoLivre/Educacao/animais.png"
import espacosEscola from "../assets/pranchasModoLivre/Educacao/espacos-da-escola.png"
import numeros from "../assets/pranchasModoLivre/Educacao/numeros.png"

import bebidas from "../assets/pranchasModoLivre/Alimentacao/bebidas.png"
import comidas from "../assets/pranchasModoLivre/Alimentacao/comidas.png"
import frutas from "../assets/pranchasModoLivre/Alimentacao/frutas.png"
import refeicoes from "../assets/pranchasModoLivre/Alimentacao/refeicoes.png"
import vegetais from "../assets/pranchasModoLivre/Alimentacao/vegetais.png"

import nivelDor from "../assets/pranchasModoLivre/CorpoSaude/nivel-de-dor.png"
import partesCorpo from "../assets/pranchasModoLivre/CorpoSaude/partes-do-corpo.png"
import profissionaisSaude from "../assets/pranchasModoLivre/CorpoSaude/profissionais-da-saude.png"
import saude from "../assets/pranchasModoLivre/CorpoSaude/saude.png"
import sensacoes from "../assets/pranchasModoLivre/CorpoSaude/sensacoes.png"

import banheiro from "../assets/pranchasModoLivre/Lugares/banheiro.png"
import cozinha from "../assets/pranchasModoLivre/Lugares/cozinha.png"
import estabelecimentos from "../assets/pranchasModoLivre/Lugares/estabelecimentos.png"
import quarto from "../assets/pranchasModoLivre/Lugares/quarto.png"
import sala from "../assets/pranchasModoLivre/Lugares/sala.png"


const ComunicacaoGeral = [
  { titulo: "Ações", imagem: acoes, link: "/acoes" },
  { titulo: "Interação", imagem: interacao, link: "/interacao" },
  { titulo: "Pessoas", imagem: pessoas, link: "/pessoas" },
  { titulo: "Soletrar", imagem: soletrar, link: "/soletrar" },
  { titulo: "Palavras Essenciais", imagem: palavras, link: "/palavras-essenciais" },
];

const Educacao = [
  { titulo: "Ajuda na Escola", imagem: ajudaEscola, link: "/modo-livre/ajuda-na-escola" },
  { titulo: "Alfabeto", imagem: alfabeto, link: "/modo-livre/alfabeto" },
  { titulo: "Animais", imagem: animais, link: "/modo-livre/animais" },
  { titulo: "Espaços da Escola", imagem: espacosEscola, link: "/modo-livre/espacos-da-escola" },
  { titulo: "Números", imagem: numeros, link: "/modo-livre/numeros" },
];

const Alimentacao = [
  { titulo: "Bebidas", imagem: bebidas, link: "/modo-livre/bebidas" },
  { titulo: "Comidas", imagem: comidas, link: "/modo-livre/comidas" },
  { titulo: "Frutas", imagem: frutas, link: "/modo-livre/frutas" },
  { titulo: "Refeições", imagem: refeicoes, link: "/modo-livre/refeicoes" },
  { titulo: "Vegetais", imagem: vegetais, link: "/modo-livre/vegetais" },
];

const CorpoSaude = [
  { titulo: "Nível de Dor", imagem: nivelDor, link: "/modo-livre/nivel-de-dor" },
  { titulo: "Partes do Corpo", imagem: partesCorpo, link: "/modo-livre/partes-do-corpo" },
  { titulo: "Profissionais da Saúde", imagem: profissionaisSaude, link: "/modo-livre/profissionais-da-saude" },
  { titulo: "Saúde", imagem: saude, link: "/modo-livre/saude" },
  { titulo: "Sensações", imagem: sensacoes, link: "/modo-livre/sensacoes" },
];

const Lugares = [
  { titulo: "Banheiro", imagem: banheiro, link: "/modo-livre/banheiro" },
  { titulo: "Cozinha", imagem: cozinha, link: "/modo-livre/cozinha" },
  { titulo: "Estabelecimentos", imagem: estabelecimentos, link: "/modo-livre/estabelecimentos" },
  { titulo: "Quarto", imagem: quarto, link: "/modo-livre/quarto" },
  { titulo: "Sala", imagem: sala, link: "/modo-livre/sala" },
];

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
      <FaixaDeModo texto="O Que Eu Preciso" cor="#58D68D" />
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
