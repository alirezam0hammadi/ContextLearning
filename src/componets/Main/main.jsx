import React from "react";
import {AppStateContext} from "../store/store";
import {useContext} from "react";

function Main({name, price}) {

    const {addToCard} = useContext(AppStateContext)


    return (
        <main>
            {(name && price) ?
                <div onClick={() => addToCard(name, price)} className={'container'}>
                    <div className={'container-row'}>
                        <div className={'container-card'}>
                            <div className={'card-img'}><img
                                src="https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1656426417.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                alt="0"/></div>
                            <div className={'card-name'}>{name}</div>
                            <div className={'card-price'}>{price}$</div>
                            <div className={'Addtocard'}>

                                <button>add to card</button>
                            </div>
                        </div>

                    </div>

                </div>
                :
                <>product not found</>
            }

        </main>
    )
}

export default Main;