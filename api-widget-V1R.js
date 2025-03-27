 // Big payment Instance

// blue color : #3E4658 rgb(62, 70, 88)
// pink color : #C38A89 rgb(195, 138, 137)
// red color : #EC241C rgb(236, 36, 28)

 const createModal = (product, desc, price, currency, ) => {
        // Create modal container with innerHTML
        const modal = document.createElement('div');
        modal.classList.add('modal__overlay');

        modal.innerHTML = `
            <style> @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap');</style>
            
            <div class="modal__content">
                <div class = "modal__container"> 
                    <div class= "modal__info__section">
                        <h1>Product info</h1>
                        <div class='modal__product__detail'>
                            <p>Product <br> ${product} </p>
                            <p>Description. <br> ${desc} </p>
                            <p class = "amount__detail">Amount : <span> ${price} ${currency} </span> </p>
                        </div>
                    </div>
                    <div class= "modal__form__section">
                        <h1>Please select the payment type </h1>
                       <form id="payment-form">
                            <div class="payment-option" id="paypal-option" onclick="selectGroup(this)">
                                
                                <label for="paypal">
                                    <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1743023003/api-possapay/yrf7ze4xx3yhx9bb9yhy.png" alt="PayPal Logo" class="payment-logo">
                                    <div class="pay-desc">
                                        <span>PayPal</span>
                                        <small>Faite un paiement simple avec Paypal </small>
                                    </div>
                                </label>
                            </div>
                            <div class="payment-option" id="card-option" onclick="selectGroup(this)">
                                
                                <label for="card">
                                    <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1743021586/api-possapay/cguguzsllmpphpzqvkg4.png" alt="Card Logo" class="payment-logo">
                                    <div class="pay-desc">
                                        <span>VISA</span> 
                                        <small>Pour tous type de carte. VISA - Mater Card - American Express </small>
                                    </div>
                                </label>
                            </div>
                            <div class="payment-option" id="mobilepay-option" onclick="selectGroup(this)">
                               
                                <label for="mobilepay">
                                    <img src="https://res.cloudinary.com/desx1y7nl/image/upload/v1741871774/api-possapay/mdns371wwkkxjx5fnwpr.png" alt="Mobile Pay Logo" class="payment-logo">
                                    <div class="pay-desc">
                                        <span>Possa Pay</span>
                                        <small>Soyez parmi les premier a tester le nouveau mode de paiement</small>
                                    </div>
                                </label>
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
            alert('Form submitted');
            modal.style.display = 'none';  // Close the modal on submit
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


 // Show the modal when needed
    const amount = '500000';
 function showModal(productName, description, amount,currency) {
    const modal = createModal(productName, description, amount, currency);
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}


// const startPayment = {
//     payment : async (data) => {
//     }
// }
