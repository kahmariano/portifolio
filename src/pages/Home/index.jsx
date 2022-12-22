import briefcase from '../../assets/briefcase.svg'
import github from '../../assets/github.svg'
import globe from '../../assets/globe.svg'
import linkedin from '../../assets/linkedin.svg'
import mail from '../../assets/mail.svg'
import map_pin from '../../assets/map_pin.svg'
import kah from '../../assets/kah.jpg'

export function Home() {
  return (
    <>
      <div>
        <img src={kah} alt="imagem karina" />
        <h1>Karina Mariano</h1>
        <h3>Futura desenvolvedora</h3>
      </div>
      <div>
        <p>
          <img src={map_pin} alt="icone de localizaçao" /> brasil
        </p>
        <p>
          <img src={briefcase} alt="icone de predio" />
          Rocketseat
        </p>
        <a href="">
          <img src={github} alt="icone github" />
          kahmariano
        </a>
        <p>
          <a href="">
            <img src={linkedin} alt="icone linkedim" />
            kahmariano
          </a>
        </p>
        <br />
        <a href="">
          <img src={globe} alt="icone de globo" />
          mysite
        </a>
        <p>
          <img src={mail} alt="icone de email" />
          kmariano...@gmail.com
        </p>
      </div>
    </>
  )
}
