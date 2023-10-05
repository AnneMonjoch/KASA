import starFull from "../../assets/images/star-full.svg";
import starEmpty from "../../assets/images/star-empty.svg";

function Rating({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="ratingWrapper">
      {
        stars.map((rate, index) => 
          score >= rate ? <img key={`${rate}-${index}`} src={ starFull } alt="note" /> : <img key={`${rate}-${index}`} src={ starEmpty } alt="note" />
        )
      }
    </div>
  )
}

export default Rating;