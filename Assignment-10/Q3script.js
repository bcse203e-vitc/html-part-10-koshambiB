document.addEventListener('DOMContentLoaded', function() {
    const pizzaForm = document.getElementById('pizzaForm');
    const orderSummary = document.getElementById('orderSummary');
    const summaryContent = document.getElementById('summaryContent');
    const newOrderBtn = document.getElementById('newOrderBtn');

    const prices = {
        Small: 10,
        Medium: 12,
        Large: 14,
        toppingPrice: 1
    };

    pizzaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const selectedSize = document.querySelector('input[name="size"]:checked');
        
        const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
            .map(topping => topping.value);

        if (!selectedSize) {
            alert('Please select a pizza size!');
            return;
        }

        const basePrice = prices[selectedSize.value];
        const toppingsPrice = selectedToppings.length * prices.toppingPrice;
        const totalPrice = basePrice + toppingsPrice;

        let summaryHTML = `
            <p><strong>Size:</strong> ${selectedSize.value} Pizza ($${basePrice})</p>
            <p><strong>Toppings:</strong> ${selectedToppings.length > 0 ? 
                selectedToppings.join(', ') + ` ($${toppingsPrice})` : 
                'No extra toppings'}</p>
            <div class="total-price">Total Price: $${totalPrice}</div>
            <p><strong>Order Date:</strong> ${new Date().toLocaleString()}</p>
        `;

        summaryContent.innerHTML = summaryHTML;
        pizzaForm.style.display = 'none';
        orderSummary.classList.remove('hidden');
    });

    newOrderBtn.addEventListener('click', function() {
        pizzaForm.reset();
        pizzaForm.style.display = 'block';
        orderSummary.classList.add('hidden');
    });
});
