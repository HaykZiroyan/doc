import React, { Component } from 'react';
import Doccomp from "./doccomp/doccomp";
import "./docs.css";
import docinfo from "./docsInfo.json";
import prof from "./profession.json";

class Doctors extends Component {
    // state = {
    //     // doctors: [
    //     //     {image: "docs/1.jpg" , name: "Անատոլի Սերգեյի Գնունի", link: "/132", texts: [
    //     //         "անեսթեզիոլոգ-ռեանիմատոլոգ ",
    //     //         "Գործադիր տնօրեն, Ինտենսիվ թերապիայի և վերակենդանացման բաժանմունքի վարիչ"
    //     //     ]},
    //     //     {image: "docs/2.jpg", name: "Աիդա Յուրիկի Խեդոյան", link: "/169", texts: [
    //     //         "ռադիոլոգ",
    //     //         "Ախտորոշման ծառայության գծով տնօրենի տեղակալ"
    //     //     ]},
    //     //     {image: "docs/3.jpg", name: "Կոստան Սամվելի Ղալումյան", link: "/13", texts: [
    //     //         "ռադիոլոգ ",
    //     //         "Ախտորոշման կլինիկայի ղեկավար"
    //     //     ]},
    //     //     {image: "docs/4.jpg", name: "Նոնա Համլետի Մարտիրոսյան",  link: "/74", texts: [
    //     //         "էնդոկրինոլոգ ",
    //     //         "Թերապևտիկ ծառայությունների գծով փոխտնօրեն"
    //     //     ]},
    //     //     {image: "docs/5.jpg", name: "Անդրանիկ Իսրայելի Ադամյան", link: "/99", texts: [
    //     //         "վիրաբույժ ",
    //     //         "Ընդհանուր և լապարոսկոպիկ վիրաբուժության բաժանմունք N1 բաժնի վարիչ"
    //     //     ]},
    //     //     {image: "docs/6.jpg", name: "Անդրանիկ Պողոսի Պողոսյան", link: "/118", texts: [
    //     //         "գինեկոլոգ",
    //     //         "Գինեկոլոգիայի ծառայության ղեկավար"
    //     //     ]},
    //     //     {image: "docs/7.jpg", name: "Արամ Գրիգորի Բադալյան", link: "/93", texts: [
    //     //         "ուռուցքաբան, վիրաբույժ ",
    //     //         "Գլխի և պարանոցի վիրաբուժության ծառայության ղեկավար"
    //     //     ]},
    //     //     {image: "docs/8.jpg", name: "Արման Պարգևի Հակոբյան", link: "/110", texts: [
    //     //         "նյարդավիրաբույժ",
    //     //         "Էնդոսկոպիկ նյարդավիրաբուժության և ողնաշարի վիրաբուժության ծառայության ղեկավար"
    //     //     ]},
    //     // ],
    //     profession: [
    //         "Մասնագիտություն",
    //         "ալերգոլոգ",
    //         "ակնաբույժ",
    //         "անեսթեզիոլոգ-ռեանիմատոլոգ",
    //         "անոթաբան",
    //         "աուդիոլոգ",
    //         "ասեղնաբույժ",
    //         "բարոթերապևտ",
    //         "բժիշկ-լաբորանտ",
    //         "բիոքիմիկ",
    //         "բիոֆիզիկ",
    //         "բուժական մերսող",
    //         "բուժքույր",
    //         "բրոնխոսկոպիստ",
    //         "գաստրոէնտերոլոգ",
    //         "գինեկոլոգ"
    //     ]

    // }
    render() {
        // const doctors = this.state.doctors
        // const prof = this.state.profession
        return (
            <div className="bgc">
                <a href="/" className="ttl">Գլխավոր</a>
                <p className="ttl1">/ Բժիշկներ</p>
                <p className="ttls">Բժիշկներ</p>
                <div>
                    <input placeholder="Անուն, ազգանուն" className="names" />
                    <select id="cars" name="cars">
                        {prof.map((elem) => {
                            return <option value={elem}>{elem}</option>
                        })}
                        
                    </select>
                    <button className="srch"> <img src="searchs.png" className="imgs" /> </button>
                </div>
                {/* <Route path="/contacts" element={ <p>text</p>} /> */}
                <div className="containerdoc">
                    {docinfo.map((elem) => {
                        return <Doccomp data={elem} />
                    })}
                </div>


            </div>

        )

    }

}
export default Doctors