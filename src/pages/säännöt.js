import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import LocalizedStrings from "react-localization"

export const Head = () => <Seo title="Säännöt" />

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  let strings = new LocalizedStrings({
    fi:{
      title: "YLEISIÄ OHJEITA JA SÄÄNTÖJÄ",
      foren: "For english rules and instructions, change your browser language to 'english'.",
      toasts: "TOASTMASTERIT",
      toast1p: "Toastmasterit johtavat illan kulkua.",
      toast2p:"Toastmastereiden sana on laki.",
      toast3p:"Kun Toastit puhuvat sitsikansa on hiljaa.",
      puheenvuoroTitle: "PUHEENVUOROT",
      puheenvuoro: "Voit pyytää puheenvuoroa nousemalla seisomaan. Kun Toastmaster antaa sinulle luvan puhua esittele itsesi kuta kuinkin näin: ”Arvon Toastmasterit, ja arvoisa sitsikansa minun nimeni on …” Esittelynjälkeen voit vastata mahdollisiin sitsikansan esittämiin kysymyksiin sekä kertoa asiasi/toivoa laulua jne. jne.",
      huudotTitle:"HUUDETTAVAT LUIKAUTUKSET",
      huudotP: "Voit halutessasi huutaa laulujen säkeistöjen välissä seuraavia huudahduksia:",
      mellansup: "Kaikki juovat huikan ja laulua jatketaan sen jälkeen",
      tplus:"Laulun tempon nopeutus",
      tminus:"Laulun tempon hidastus",
      omstart:"Aloitetaan meneillään oleva säkeistö alusta",
      skoolausTitle:"SKOOLAUS",
      skoolausP: "Maljan nosto laulun jälkeen. Yleisesti joka toinen sitsikansan henkilö skoolaa ensin oikealla, sitten vasemmalla ja lopuksi vastapäätä istuvan henkilön kanssa, ja joka toinen ensin vasemmalla, sitten oikealla ja lopuksi vastapäätä istuvan henkilön kanssa. Skoolaus voi myös tapahtua vinottain: esim. ensin vinoon oikealle, sitten vasemmalle ja lopuksi vastapäätä.",
      muutaTitle: "MUUTA",
      muutaP0:"ÄLÄ KÄYTÄ PUHELINTA mihinkään muuhun kuin sähköisen lauluvihkon selaamiseen.",
      muutaP1:"ÄLÄ TAPUTA vaan hakkaa pöytää.",
      muutaP2:"Pöydästä saa nousta vain Toastien luvalla.",
      muutaP3:"Sääntöjen rikkomisesta seuraa ankaria rangaistuksia.",
      takaisin: "Takaisin"
    },
    en:{
      title: "COMMON INSTRUCTIONS AND RULES",
      foren:"",
      toasts: "TOASTMASTERS",
      toast1p: "Toastmasters lead the evening.",
      toast2p:"The word of a Toastmaster is the law.",
      toast3p:"The sitsi people stay silent when the Toastmasters are speaking.",
      puheenvuoroTitle: "FLOOR REQUESTS",
      puheenvuoro: "You can request the floor by standing up. When the Toastmaster gives you permission to speak, introduce yourself something like this: 'Distinguished Toastmasters and esteemed sitsipeople, my name is ...' After the introduction, you can respond to any questions posed by the sitsipeople and share your thoughts/request a song, etc., etc.",
      huudotTitle: "HOWLING GLANCES",
      huudotP: "You can, if you wish, shout the following exclamations between the verses of the songs:",
      mellansup: "Everyone takes a sip, the song continues afterwards",
      tplus:"Seepd up the tempo at the song.",
      tminus:"Slow down the tempo at the song.",
      omstart:"Let's start the current verse from the beginning",
      skoolausTitle:"TOASTING",
      skoolausP:"Toasting after the song. Typically, every other person at the gathering first toasts to the right, then to the left, and finally with the person sitting opposite them, while the others first toast to the left, then to the right, and finally with the person sitting opposite them. Toasting can also occur diagonally, for example, first diagonally to the right, then to the left, and finally opposite.",
      muutaTitle: "OTHER THINGS",
      muutaP0:"DO NOT use your phone on anything else than looking the songbook.",
      muutaP1:"DO NOT CLAP, hit the table.",
      muutaP2:"You can only get out of the table with a permission of the Toastmasters.",
      muutaP3:"There will be punishments for breaking the rules.",
      takaisin:"Back"
    }
  })
  return (
    <Layout location={location} title={siteTitle}>
      <header>
        <h3 itemProp="headline" style={{ fontSize: 35, marginBottom: 5 }}>
          {strings.title}
        </h3>
        <p>{strings.foren}</p>
      </header>
      <hr />
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>{strings.toasts}</h2>
      <hr />
      <p>{strings.toast1p}</p>
      <p>{strings.toast2p}</p>
      <p>{strings.toast3p}</p>
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>{strings.puheenvuoroTitle}</h2>
      <hr />
      <p>{strings.puheenvuoro}</p>
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>
        {strings.huudotTitle}
      </h2>
      <hr />
      <p>
        {strings.huudotP}
      </p>
      <ul style={{ listStylePosition: "inside" }}>
        <li>
          MELLAN SUP = {strings.mellansup}
        </li>
        <li>TEMPO PLUS = {strings.tplus}</li>
        <li>TEMPO MIINUS = {strings.tminus}</li>
        <li>OM START = {strings.omstart}</li>
      </ul>
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>{strings.skoolausTitle}</h2>
      <hr />
      <p>
        {strings.skoolausP}
      </p>
      <h2 style={{ fontSize: 20, marginBottom: 5 }}>MUUTA</h2>
      <hr />
      <div>
        <p>
          {strings.muutaP0}
        </p>
        <p>{strings.muutaP1}</p>
        <p>{strings.muutaP2}</p>
        <p>{strings.muutaP3}</p>
      </div>
      <hr />

      <nav className="blog-post-nav">
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
    </Layout>
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
