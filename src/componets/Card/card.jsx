import * as React from 'react';
import {Main} from "../index";

function Card() {
    const renderProduct = (products) => {
        // console.log(products.length )
        return (
            products.map((product) => (

                (product && product.name && product.price)
                    ?
                    <Main name={product.name} price={product.price}/>
                    // product===undefined ? console.log('product not found')
                    :
                    <div>test</div>
            ))
        )

    }
    const products = [
        {
            name: "tishert",
            price: 10,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkddi-h.assetsadobe3.com%2Fis%2Fimage%2Fcontent%2Fdam%2Fau-com%2Fmobile%2Fmb_img_58.jpg%3Fscl%3D1&tbnid=4djkWJ-OWgzBAM&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMygBegUIARC_AQ..i&imgrefurl=https%3A%2F%2Fwww.au.com%2Fenglish%2Fmobile%2F&docid=Ysb1gHGiae-OCM&w=280&h=280&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMygBegUIARC_AQ"
        },
        {
            name: "lebas",
            price: 11,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.gadgets360cdn.com%2Fproducts%2Flarge%2Fvivo-t2-5g-db-709x800-1681200173.jpg&tbnid=26Kv3lpYef9W2M&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMygKegUIARDRAQ..i&imgrefurl=https%3A%2F%2Fwww.gadgets360.com%2Fvivo-t2-5g-price-in-india-116838&docid=eJt9PFZFjpvceM&w=709&h=800&itg=1&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMygKegUIARDRAQ"
        },
        {
            name: "pirahan",
            price: 12,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.oppo.com%2Fcontent%2Fdam%2Foppo%2Fcommon%2Fmkt%2Fv2-2%2Ff21_pro%2Fnavigation%2Fv2%2FNavigation-SunsetOrange-427_600-pc.png.thumb.webp&tbnid=Fw-heNA_sATXTM&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMygbegUIARD5AQ..i&imgrefurl=https%3A%2F%2Fwww.oppo.com%2Fbd%2Fsmartphones%2F&docid=ASM6ZJVclXk6YM&w=427&h=600&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMygbegUIARD5AQ"
        },
        {
            name: "shalvar",
            price: 13,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmintemi.in%2Fwp-content%2Fuploads%2F2022%2F01%2Foneplus-9-rt-mobile-phone-on-emi-7.jpg&tbnid=Sr7BdTqtDoe-4M&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyggegUIARCDAg..i&imgrefurl=https%3A%2F%2Fmintemi.in%2Fproduct%2Foneplus-9-rt-no-cost-emi-mobile-phone-8-128gb%2F&docid=rcmHOSIkjvKHJM&w=300&h=400&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyggegUIARCDAg"
        },
        {
            name: "jorab",
            price: 14,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsathya.in%2Fmedia%2F89277%2Fcatalog%2FVivo%2520Mobile%2520Y21G%25204GB%2520RAM%252064GB_01.jpg&tbnid=VOM7AkcegmermM&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyhHegQIARBv..i&imgrefurl=https%3A%2F%2Fsathya.in%2Fvivo-mobile-y21g-4gb-64gb&docid=4HxBhGmZmHNREM&w=800&h=800&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyhHegQIARBv"
        },
        {
            name: "kolah",
            price: 15,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.media.amplience.net%2F%2Fi%2Fcurrysprod%2FTechtalk-S23-header&tbnid=2vvELJMCYhnuzM&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyhVegUIARCSAQ..i&imgrefurl=https%3A%2F%2Fwww.currys.co.uk%2Ftechtalk%2Fmobile%2Fmobile-reviews&docid=NODLIi9b4s0zVM&w=2257&h=1181&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyhVegUIARCSAQ"
        },
        {
            name: "kolah",
            price: 16,
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.media.amplience.net%2F%2Fi%2Fcurrysprod%2FTechtalk-S23-header&tbnid=2vvELJMCYhnuzM&vet=12ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyhVegUIARCSAQ..i&imgrefurl=https%3A%2F%2Fwww.currys.co.uk%2Ftechtalk%2Fmobile%2Fmobile-reviews&docid=NODLIi9b4s0zVM&w=2257&h=1181&q=mobile&ved=2ahUKEwiJqsvMs6yAAxWMrycCHfcqB-0QMyhVegUIARCSAQ"
        }

    ]

    return (
        <div className={'card'}>
            {products.length > 0 ? renderProduct(products) : <>product is not valid</>}
        </div>
    );
}

export default Card;