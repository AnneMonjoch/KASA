import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { fetchAppartment } from "../../service";
import Carousel from "../../components/Carrousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";

function FicheLogement() {
  const idLogement = useParams();
  const navigate = useNavigate();
  const [ logement, setLogement ] =  React.useState();

  React.useEffect(()=>{
    async function getApparts(){
      const appartments = await fetchAppartment();
      const appartment = appartments.find(( appart ) => appart.id === idLogement.id);
      if( !appartment ){
        navigate( "notfound" );
      }
      setLogement( appartment )
    }
    getApparts();
  },[ idLogement, navigate ]);

  const tags = logement && logement.tags;
  const equipments = logement && logement.equipments.map(( equip, index ) => {
    return (
      <ul key= { index } >
        <li>{ equip }</li>
      </ul>
    )
  })

  if( logement ){
    return (
      <main>
        <Carousel slides={ logement && logement.pictures }/>
        <section className="ficheLogeInfosWrapper">
          <div>
            <div className="ficheLogeTitle">
              <h1>{ logement && logement.title }</h1>
              <h2>{ logement && logement.location }</h2>
            </div>
            <ul className="ficheLogeTags">
              {
                tags.map((tag, index) => {
                  return (
                    <li key={`${tag}-${index}`}>{ tag }</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="ficheLogeInfosRight">
            <div className="ficheLogeAuthor">
              <p>{ logement.host.name }</p>
              <img src={ logement && logement.host.picture } alt={logement && logement.host.name } />
            </div>
            <Rating score={ logement && logement.rating } />
          </div>
        </section>
        <section className="ficheLogeDropdowns">
          <Dropdown title="Description" content={logement && logement.description } />
          <Dropdown title="Equipements" content={ equipments } />
        </section>
      </main>
    )
  }
}

export default FicheLogement;