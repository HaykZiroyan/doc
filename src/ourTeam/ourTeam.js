import React, { Component } from 'react';
import "./team.css";

class Team extends Component {
    state = {
        teams: [
            {title:"Կառավարչական մարմին", link: "first"},
            {title:"Մասնագիտական ​​խորհուրդ", link: "first"},
            {title:"Մասնագետներ", link: "first"},
            {title:"Բուժքույրեր", link: "first"},
            {title:"Պացիենտի աջակից", link: "first"}
        ]
    }
    render() {
        const buts = this.state.teams
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Մեր թիմը</p>
                <p className="ttls">Մեր թիմը</p>
                <div className={`row teams`}>
                    <div className={`col aboutteam`}>
                        <p className="tits">Թիմային աշխատանքը մեր հաջողության գրավականն է</p>
                        <p className="txtinf">«Նաիրի» ԲԿ-ում ստեղծվել են տարբեր մասնագիտական ուղղվածության բազմապրոֆիլ թիմեր` պացիենտի ճշգրիտ և արագ ախտորոշման ու արդյունավետ բուժման համար` հատկապես բարդ դեպքերում: </p>
                        <p>Վիրաբուժական բազմամասնագիտական թիմը համալիր և համակցված վիրաբուժական ախտաբանությունների դեպքում կատարում է համատեղ վիրահատություն: Պացիենտները կարող են միաժամանակ ստանալ մի քանի մասնագետների խորհրդատվություն, որի ընթացքում, հեռաբժշկության տեխնոլոգիաների շնորհիվ, հնարավոր է բարդ դեպքերը քննարկել Հայաստանի այլ կլինիկաների և արտերկրի առաջատար մասնագետների հետ։</p>
                    </div>
                    <div className={`col aboutteam`}>
                        <img src="team/team.jpg" className="teamimg" />
                    </div>

                </div>
                <div className={"team-div"}>
                    {buts.map((elem) => {
                        return <a href={elem.link} className={"teames"}>{elem.title}</a>
                    })}
                    <hr></hr>
                </div>

            </div>

        )

    }

}
export default Team