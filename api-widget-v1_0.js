// Big payment Instance

// blue color : #3E4658 rgb(62, 70, 88)
// pink color : #C38A89 rgb(195, 138, 137)
// red color : #EC241C rgb(236, 36, 28)


const css = `
    @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap');

    /* Modal Overlay */
    .modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    /* Modal Content */
    .modal__content {
        width: 50%; 
    }
    @media only screen and (max-width: 600px) {
    .modal__content{ width: 95%; }
    }
    @media screen and (min-width: 601px) and (max-width: 850px) {
    .modal__content{ width: 95%; }
    }
    @media screen and (min-width: 851px) and (max-width: 1300px) {
    .modal__content{ width: 95%; }
    }
    @media screen and (min-width: 1301px) and (max-width: 1329px) {
    .modal__content{ width: 75%; }
    }
    @media screen and (min-width: 1330px) and (max-width: 1569px) {
    .modal__content{ width: 65%; }
    }
    @media screen and (min-width: 1570px) and (max-width: 1727px) {
    .modal__content{ width: 65%; }
    }

    .modal__content>.modal__container{
        display: flex;
        background-color: transparent;
        align-items: center;
    }
    @media only screen and (max-width: 600px) {
    .modal__content>.modal__container{ flex-direction: column; }
    }
    @media screen and (min-width: 601px) and (max-width: 850px) {
    .modal__content>.modal__container{ flex-direction: column; }
    }

    /* Product description */
    .modal__container>.modal__info__section{
        background-color: #EC241C;
        width: 40%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family: "MuseoModerno";
    }
    @media only screen and (max-width: 600px) {
    .modal__container>.modal__info__section{ display: none; }
    }
    @media screen and (min-width: 601px) and (max-width: 850px) {
    .modal__container>.modal__info__section{ display: none; }
    }

    .modal__container>.modal__info__section>h1{
        font-size:x-large;
        text-decoration: underline;
    }
    .modal__info__section>.modal__product__detail{
        padding:10px 0px;
        width: 80%;
        text-align: center;
    }
    .modal__product__detail>.amount__detail>span{
        font-weight: 400;
        font-size: x-large;
    }

    /* Form Second Section  */
    .modal__container>.modal__form__section{
        font-family: "MuseoModerno";
        padding: 20px;
        width: 60%;
        background-color: #3E4658;
        height: 400px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .modal__form__section>form{
        width: 90%;
    }
    .payment-option {
        display: flex;
        align-items: center;
        margin: 5px 0;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 5px;
        cursor: pointer;
        transition: border 0.3s ease;
    }
    .modal__form__container{
        display: flex;
    }
    .payment-option>label{
        display: flex;
        align-items: center;
    }
    label>.pay-desc{
        display: flex;
        flex-direction: column;
    }
    .payment-option img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
    .payment-option span {
        font-size: 18px;
    }
    .payment-radio {
        display: none;
    }
    .payment-option.selected {
        background-color: white;
        color: #3E4658;
    }
    .payment-option:hover {
        background-color:rgba(255, 255, 255, 0.2);
        cursor: pointer;
    }
    .btn__container__modal{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .modal__form__btn{
        margin-top: 5px;
        background-color: #EC241C;
        padding: 10px 50px;
        color: white;
        border: 1px solid #EC241C;
    }
    .modal__form__btn:hover{
        background-color: transparent;
        color: #EC241C;
    }
    @media only screen and (max-width: 600px) {
    .modal__container>.modal__form__section{ width: 90%; height: auto; }
    .modal__form__section>h1{ text-align: center; font-size: 1.5rem; }
    .payment-option { display: block; }
    .modal__form__container{ display: block; }
    }
    @media screen and (min-width: 601px) and (max-width: 850px) {
    .modal__container>.modal__form__section{ width: 70%; height: auto; }
    .modal__form__section>h1{ text-align: center; font-size: 2rem; }
    }
    button {
        padding: 10px 15px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
`;

// Injecter le style dans la page :
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

// ----------------------------- //
// -------- JAVASCRIPT --------- //
// ----------------------------- //

const createModal = (productName, productId, desc, price, currency, user_email, service_publicKey,) => {
    const modal = document.createElement('div');
    modal.classList.add('modal__overlay');

    modal.innerHTML = `
        <div class="modal__content">
            <div class="modal__container"> 
                <div class="modal__info__section">
                    <h1>Product info</h1>
                    <div class='modal__product__detail'>
                        <p>Product <br> ${productName} </p>
                        <p>Description. <br> ${desc} </p>
                        <p class="amount__detail">Amount : <span> ${price} ${currency} </span> </p>
                    </div>
                </div>
                <div class="modal__form__section">
                    <h1>Please select the payment type </h1>
                   <form id="payment-form">
                        <div class="modal__form__container">
                            <div class ="modal__choice__payment_container_1">
                                <div class="payment-option" id="possapay" onclick="selectGroup(this)">
                                    <label for="mobilepay">
                                        <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1741871774/api-possapay/mdns371wwkkxjx5fnwpr.png" alt="possapay Logo" class="payment-logo">
                                        <div class="pay-desc">
                                            <span>Possa Pay</span>
                                            <small>Soyez parmi les premier a tester le nouveau mode de paiement</small>
                                        </div>
                                    </label>
                                </div> 

                                <div class="payment-option" id="mobile" onclick="selectGroup(this)">
                                    <label for="paypal">
                                        <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1754342389/orage_fwtshg.png" alt="mobile Pay Logo" class="payment-logo">
                                        <div class="pay-desc">
                                            <span>Mobile Payment</span>
                                            <small>MoMo, OM etc.. </small>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div class ="modal__choice__payment_container_2">
                                <div class="payment-option" id="paypal" onclick="selectGroup(this)">
                                    <label for="paypal">
                                        <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1743023003/api-possapay/yrf7ze4xx3yhx9bb9yhy.png" alt="PayPal Logo" class="payment-logo">
                                        <div class="pay-desc">
                                            <span>PayPal</span>
                                            <small>Faite un paiement simple avec Paypal </small>
                                        </div>
                                    </label>
                                </div>

                                <div class="payment-option" id="card" onclick="selectGroup(this)">
                                    <label for="card">
                                        <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1743021586/api-possapay/cguguzsllmpphpzqvkg4.png" alt="Card Logo" class="payment-logo">
                                        <div class="pay-desc">
                                            <span>VISA</span> 
                                            <small>Pour tous type de carte. VISA - Mater Card - American Express </small>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="btn__container__modal">
                            <button class="modal__form__btn">Continuer</button>
                        </div>                        
                    </form>
                </div>
            </div> 
        </div>
    `;

    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const paymentChoice = document.querySelector('.payment-option.selected') 
            ? document.querySelector('.payment-option.selected').id 
            : null;

        if (paymentChoice) {
            const formData = {
                producId: productId,
                productName : productName,
                user_email: user_email,
                service_publicKey : service_publicKey,
                amount: price,
                currency: currency,
                paymentChoice: paymentChoice
            };
            window.location.href = `https://www.possapay.com/api-payment?productName=${productName}&amnt=${formData.amount}&currency=${formData.currency}&email=${formData.user_email}&serviceKey=${formData.service_publicKey}&payType=${formData.paymentChoice}&productId=${formData.producId}`;
        } else {
            alert('Please select a payment method.');
        }
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.style.display = 'none';
    });

    return modal;
}

function selectGroup(element) {
    const groups = document.querySelectorAll('.payment-option');
    groups.forEach(group => group.classList.remove('selected'));
    element.classList.add('selected');
}

function showModal(product = {}) {
    const modal = createModal(product.productName, product.productId, product.description, product.amount, product.currency, product.user_email, product.service_publicKey);
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}