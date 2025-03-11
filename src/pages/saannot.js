import Navbar from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import LocalizedStrings from "react-localization"

export const Head = () => <Seo title={strings.main_title} />
let strings = new LocalizedStrings({
  fi:{
    main_title: "Säännöt",
    title: "Yleisiä ohjeita ja sääntöjä",
    foren: "For english rules and instructions, change your browser language to 'english'.",
    huom: "Huomioi, että säännöt ovat yleiset eivätkä välttämättä päde kaikkiin sitseihin. Kuuntele ja noudata ensisijaisesti toastien antamia sitsikohtaisia ohjeita.",
    toasts: "Toastmasterit",
    toast1p: "Toastmasterit johtavat illan kulkua.",
    toast2p: "Toastmastereiden sana on laki.",
    toast3p: "Kun Toastit puhuvat sitsikansa on hiljaa.",
    puheenvuoroTitle: "Puheenvuorot",
    puheenvuoro: "Voit pyytää puheenvuoroa nousemalla seisomaan. Kun Toastmaster antaa sinulle luvan puhua esittele itsesi kuta kuinkin näin: ”Arvon Toastmasterit, ja arvoisa sitsikansa minun nimeni on …” Esittelynjälkeen voit vastata mahdollisiin sitsikansan esittämiin kysymyksiin sekä kertoa asiasi/toivoa laulua jne. jne.",
    huudotTitle: "Huudettavat luikautukset",
    huudotP: "Voit halutessasi huutaa laulujen säkeistöjen välissä seuraavia huudahduksia:",
    mellansup: "Kaikki juovat huikan ja laulua jatketaan sen jälkeen",
    tplus: "Laulun tempon nopeutus",
    tminus: "Laulun tempon hidastus",
    omstart: "Aloitetaan meneillään oleva säkeistö alusta",
    skoolausTitle: "Skoolaus",
    skoolausP: "Maljan nosto laulun jälkeen. Yleisesti joka toinen sitsikansan henkilö skoolaa ensin oikealla, sitten vasemmalla ja lopuksi vastapäätä istuvan henkilön kanssa, ja joka toinen ensin vasemmalla, sitten oikealla ja lopuksi vastapäätä istuvan henkilön kanssa. Skoolaus voi myös tapahtua vinottain: esim. ensin vinoon oikealle, sitten vasemmalle ja lopuksi vastapäätä.",
    muutaTitle: "Muuta",
    muutaP0: "ÄLÄ KÄYTÄ PUHELINTA mihinkään muuhun kuin sähköisen lauluvihkon selaamiseen.",
    muutaP1: "ÄLÄ TAPUTA, vaan hakkaa pöytää.",
    muutaP2: "Pöydästä saa nousta vain ja ainoastaan Toastien luvalla.",
    muutaP3: "Sääntöjen rikkomisesta voi seurata rangaistuksia.",
    takaisin: "Takaisin"
  },
  en:{
    main_title: "Rules",
    title: "Common instructions and rules",
    foren:"",
    toasts: "Toastmasters",
    huom: "The rules are general and may not apply to all sitsit. Listen and follow the instructions given by the Toastmasters first.",
    toast1p: "Toastmasters lead the evening.",
    toast2p: "The word of a Toastmaster is the law.",
    toast3p: "The sitsi people stay silent when the Toastmasters are speaking.",
    puheenvuoroTitle: "Floor requests",
    puheenvuoro: "You can request the floor by standing up. When the Toastmaster gives you permission to speak, introduce yourself something like this: 'Distinguished Toastmasters and esteemed sitsipeople, my name is ...' After the introduction, you can respond to any questions posed by the sitsipeople and share your thoughts/request a song, etc., etc.",
    huudotTitle: "Interjections",
    huudotP: "You can, if you wish, shout the following exclamations between the verses of the songs:",
    mellansup: "Everyone takes a sip, the song continues afterwards",
    tplus: "Seepd up the tempo at the song.",
    tminus: "Slow down the tempo at the song.",
    omstart: "Let's start the current verse from the beginning",
    skoolausTitle: "Toasting",
    skoolausP: "Toasting after the song. Typically, every other person at the gathering first toasts to the right, then to the left, and finally with the person sitting opposite them, while the others first toast to the left, then to the right, and finally with the person sitting opposite them. Toasting can also occur diagonally, for example, first diagonally to the right, then to the left, and finally opposite.",
    muutaTitle: "Miscellaneous",
    muutaP0: "DO NOT use your phone on anything else than looking the songbook.",
    muutaP1: "DO NOT CLAP your hands, instead hit the table.",
    muutaP2: "You can only get out of the table with a permission of the Toastmasters.",
    muutaP3: "You might get punished for breaking the rules.",
    takaisin: "Back"
  }
})

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  return (
    <Navbar location={location} title={siteTitle}>
      <div style={{marginTop: "4rem"}}>
        <header>
          <h3 itemProp="headline" style={{ fontSize: 35, marginBottom: 5 }}>
            {strings.title}
          </h3>
          <p style={{ marginBottom: 5 }}>{strings.foren}</p>
          <p>{strings.huom}</p>
        </header>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 5 }}>{strings.toasts}</h2>
        <hr />
        <div style={{ fontSize: '1rem' }}>
          <p>{strings.toast1p}</p>
          <p>{strings.toast2p}</p>
          <p>{strings.toast3p}</p>
        </div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 5 }}>{strings.puheenvuoroTitle}</h2>
        <hr />
        <p style={{ fontSize: '1rem' }}>{strings.puheenvuoro}</p>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 5 }}>
          {strings.huudotTitle}
        </h2>
        <hr />
        <p style={{ fontSize: '1rem', marginBottom: 5 }}>
          {strings.huudotP}
        </p>
        <ul style={{ listStylePosition: "inside" }}>
          <li><b>MELLAN SUP</b>: {strings.mellansup}</li>
          <li><b>TEMPO PLUS</b>: {strings.tplus}</li>
          <li><b>TEMPO MIINUS</b>: {strings.tminus}</li>
          <li><b>OM START</b>: {strings.omstart}</li>
        </ul>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 5 }}>{strings.skoolausTitle}</h2>
        <hr />
        <p style={{ fontSize: '1rem' }}>
          {strings.skoolausP}
        </p>
        <h2 style={{ fontSize: '1.5rem', marginBottom: 5 }}>{strings.muutaTitle}</h2>
        <hr />
        <div style={{ fontSize: '1rem' }}>
          <p>
            {strings.muutaP0}
          </p>
          <p>{strings.muutaP1}</p>
          <p>{strings.muutaP2}</p>
          <p>{strings.muutaP3}</p>
        </div>
      <hr />

      <nav className="song-page-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            marginTop: "20px",
          }}
        >
          <li>
            <a href="/" className="previous">
              &laquo; {strings.takaisin}
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </Navbar>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
