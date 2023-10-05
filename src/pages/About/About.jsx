import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Dropdown from "../../components/Dropdown/Dropdown";
import data from "../../data/about.json";

function About() {
  return (
    <main>
      <AboutBanner />
      <section className="aboutDropdownWrapper">
        {
          data.map((dropdown => {
            return (
              <div key={ dropdown.id }>
                <Dropdown title={ dropdown.title } content={ dropdown.content } />
                <div className="aboutSeparator"></div>
              </div>
            )
          }))
        }

      </section>
    </main>
  )
}

export default About;