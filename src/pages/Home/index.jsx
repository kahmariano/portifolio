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
  LeftSide
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
            <img src={map_pin} alt="icone de localizaçao" /> brasil
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
          <br />
          <a href="https://my-site-rouge.vercel.app/">
            <img src={globe} alt="icone de globo" />
            mysite
          </a>
          <p>
            <img src={mail} alt="icone de email" />
            kmariano...@gmail.com
          </p>
        </PersonalData>
        <Technologies>
          <h2>Tecnologias</h2>
        </Technologies>
        <Experience>
          <h2>Experiências</h2>
        </Experience>
        <Education>
          <h2>Educação</h2>
        </Education>
      </LeftSide>
      <RightSide>
        <h2>My Projects</h2>
      </RightSide>
    </HomeWrapper>
  )
}
