import {Card} from "../card/Card";
import {cards} from "../../services/cards-service";

function Cards({value}) {
    return (
        <section className={'cards__wrapper wrapper'}>
            {
                cards.map(card => <Card key={card.id} style={card.font} value={value}/>)
            }
        </section>
    );

}

export {Cards};