import { Offers } from '../../mocks/offers';
import CardOffer from '../card/card';


type ListOffersProps = {
  offers: Offers;
}


function ListOffers ({offers: offers}: ListOffersProps): JSX.Element {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardOffer key = {offer.id} offer = {offer}/>)};
    </div>
  );
}


export default ListOffers;
