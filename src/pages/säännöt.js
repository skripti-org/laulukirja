import Layout from "../components/layout"
import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export const Head = () => <Seo title="Säännöt" />

const IndexPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
  <Layout location={location} title={siteTitle} >
  <header>
      <h3 itemProp="headline" style={{ fontSize: 35, marginBottom: 5 }}>YLEISIÄ OHJEITA JA SÄÄNTÖJÄ</h3>
  </header>
  <hr />
  <h2 style={{ fontSize: 20, marginBottom: 5 }}>TOASTMASTERIT</h2>
  <hr />
  <p>Toastmasterit johtavat illan kulkua.</p>
  <p>Toastmastereiden sana on laki.</p>
  <p>Kun Toastit puhuvat sitsikansa on hiljaa.</p>
  <h2 style={{ fontSize: 20, marginBottom: 5 }}>PUHEENVUOROT</h2>
  <hr />
  <p> 
      Voit pyytää puheenvuoroa nousemalla seisomaan.
      Kun Toastmaster antaa sinulle luvan
      puhua esittele itsesi kuta kuinkin näin:
      ”Arvon Toastmasterit, ja arvoisa
      sitsikansa minun nimeni on …”
      Esittelyn jälkeen voit vastata
      mahdollisiin sitsikansan esittämiin
      kysymyksiin sekä kertoa asiasi/toivoa
      laulua jne. jne.
  </p>
  <h2 style={{ fontSize: 20, marginBottom: 5 }}>HUUDETTAVAT LUIKAUTUKSET</h2>
  <hr />
  <p> 
      Voit halutessasi huutaa laulujen
      säkeistöjen välissä seuraavia huudahduksia:
      <li>MELLAN SUP = Kaikki juovat huikan
      ja laulua jatketaan sen jälkeen</li>
      <li>TEMPO PLUS = Laulun tempon nopeutus</li>
      <li>TEMPO MIINUS = Laulun tempon hidastus</li>
      <li>OM START = Aloitetaan meneillään
      oleva säkeistö alusta</li>
  </p>
  <h2 style={{ fontSize: 20, marginBottom: 5 }}>SKOOLAUS</h2>
  <hr />
  <p> 
      Maljan nosto laulun jälkeen.
      Yleisesti joka toinen sitsikansan henkilö
      skoolaa ensin oikealla, sitten vasemmalla
      ja lopuksi vastapäätä istuvan henkilön
      kanssa, ja joka toinen ensin vasemmalla,
      sitten oikealla ja lopuksi vastapäätä istuvan
      henkilön kanssa. Skoolaus voi myös tapahtua
      vinottain: esim. ensin vinoon oikealle,
      sitten vasemmalle ja lopuksi vastapäätä.
  </p>
  <h2 style={{ fontSize: 20, marginBottom: 5 }}>MUUTA</h2>
  <hr />
  <p>
    <p>ÄLÄ KÄYTÄ PUHELINTA mihinkään
    muuhun kuin sähköisen lauluvihkon
    selaamiseen.</p>
    <p>ÄLÄ TAPUTA vaan hakkaa pöytää.</p>
    <p>Pöydästä saa nousta vain Toastien luvalla.</p>
    <p>Sääntöjen rikkomisesta seuraa ankaria
    rangaistuksia.</p>  
  </p>
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
            <a href="/" class="previous">
              &laquo; Takaisin
            </a>
          </li>
        </ul>
      </nav>
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    site{
      siteMetadata{
        title
      }
    }
  }
`