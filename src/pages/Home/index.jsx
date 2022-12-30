import briefcase from '../../assets/briefcase.svg'
import github from '../../assets/github.svg'
import globe from '../../assets/globe.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/mail.svg'
import map_pin from '../../assets/map_pin.svg'
import kah from '../../assets/kah.jpg'
import {
  Profile,
  HomeWrapper,
  PersonalData,
  Technologies,
  Experience,
  Education,
  RightSide,
  LeftSide,
  MyProjects
} from './style'

export function Home() {
  return (
    <HomeWrapper>
      <LeftSide>
        <Profile>
          <img src={kah} alt="imagem karina" />
          <h1>Karina Mariano</h1>
          <h3>Futura desenvolvedora</h3>
        </Profile>
        <PersonalData>
          <p>
            <img src={map_pin} alt="icone de localizaçao" /> Brasil
          </p>
          <p>
            <img src={briefcase} alt="icone de predio" />
            Rocketseat
          </p>
          <a href="https://github.com/kahmariano">
            <img src={github} alt="icone github" />
            kahmariano
          </a>
          <p>
            <a href="https://www.linkedin.com/in/karina-mariano-278a2b175/">
              <img src={linkedin} alt="icone linkedim" />
              kahmariano
            </a>
          </p>
          <a href="https://my-site-rouge.vercel.app/">
            <img src={globe} alt="icone de globo" />
            mysite
          </a>
          <p>
            <img src={mail} alt="icone de email" />
            kmariano138@gmail.com
          </p>
        </PersonalData>
        <Technologies>
          <h2>Tecnologias</h2>
          <div>
            <p>JavaScript</p>
            <p>Reactjs</p>
            <p>Nodejs</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </Technologies>
        <Experience>
          <h2>Experiências</h2>
          <ul>
            <li>
              Barbearia
              <dd>2020 - Atualmente </dd>
              <dd>Salao de beleza A Casa Préo</dd>
            </li>
            <li>
              Desenvolvimento
              <dd>2022 - Atualmente</dd>
              <dd>Projetos pessoais</dd>
            </li>
          </ul>
        </Experience>
        <Education>
          <h2>Educação</h2>
          <ul>
            <li>
              Barbearia <dd>2018 - 2020 </dd>
              <dd>Curso de cabelereira e barbeira</dd>
            </li>
            <li>
              Rocketseat <dd>2022 - atualmente</dd> <dd>Discover</dd>
            </li>
          </ul>
        </Education>
      </LeftSide>
      <RightSide>
        <MyProjects>
          <h2>My Projects</h2>
          <p>Veja todos</p>
        </MyProjects>
      </RightSide>
    </HomeWrapper>
  )
}
