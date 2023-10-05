import React from "react";
import { Link } from "react-router-dom";
import { fetchAppartment } from "../../service";

function RentList() {

  const [ logements, setLogements ] = React.useState([]);

  React.useEffect(() => {
    async function getApparts() {
      const appartments = await fetchAppartment();
      setLogements( appartments )
    }
    getApparts();
  },[]);

  return (
    <section className="rentList">
      {
        logements.map(( logement ) => {
          return (
            <Link key={ logement.id } to={`/logement/${ logement.id }`}>
              <article className="rentListCard">
                <img className="rentListImg" src={ logement.cover } alt={ logement.title } />
                <p className="rentListTitle">{ logement.title }</p>
              </article>
            </Link>
          )
        })
      }
    </section>
  )
}

export default RentList;