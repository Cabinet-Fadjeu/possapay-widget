 // Big payment Instance

// blue color : #3E4658 rgb(62, 70, 88)
// pink color : #C38A89 rgb(195, 138, 137)
// red color : #EC241C rgb(236, 36, 28)

const createModal = (productName, productId, desc, price, currency, user_email, service_publicKey,) => {
    // Create modal container with innerHTML
    const modal = document.createElement('div');
    modal.classList.add('modal__overlay');

    modal.innerHTML = `
        <style> @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap');</style>
        
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
                                        <img src=" https://res.cloudinary.com/desx1y7nl/image/upload/v1754342389/orage_fwtshg.png" alt="mobile Pay Logo" class="payment-logo">
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

    // Add event listener for form submission
    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect selected payment method
        const paymentChoice = document.querySelector('.payment-option.selected') ? document.querySelector('.payment-option.selected').id : null;

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
            window.location.href = `http://localhost:5173/api-payment?productName=${productName}&amnt=${formData.amount}&currency=${formData.currency}&email=${formData.user_email}&serviceKey=${formData.service_publicKey}&payType=${formData.paymentChoice}&productId=${formData.producId}`;

        } else {
            alert('Please select a payment method.');
        }
    });

    // Close modal logic (optional)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    return modal;
}

function selectGroup(element) {
    // Remove 'selected' class from all groups
    const groups = document.querySelectorAll('.payment-option');
    groups.forEach(group => group.classList.remove('selected'));

    // Add 'selected' class to the clicked group
    element.classList.add('selected');
}

function showModal(product = {}) {
    const modal = createModal(product.productName, product.productId,product.description, product.amount, product.currency, product.user_email, product.service_publicKey);
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}
