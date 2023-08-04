<template>
    <div class="container">
        <div class="card">
            <h1 class="confirmation_header">
                Your order has been received 🎉
            </h1>
            <q-avatar size="100px" font-size="52px" color="primary" text-color="white" icon="check" />
            <p class="confirmation_thank_you">Thank you for your purchase!</p>
            <p class="confirmation_orderid">Your order ID is: 12345677</p>
            <p class="confirmation_info">You will receive an order confirmation email with details of your order.</p>
            <q-btn color="primary" icon="home" label="Back to Home" class="q-mt-lg" @click="$router.push('/')" size="lg" />
        </div>
    </div>
</template>

<style>
.container {
 margin: 0;
 padding: 0;
}
.card {
    text-align: center;
    /* background-color: rgba(0,0,0, 0.2); */
    margin: 50px 50px;
    padding: 5em;
}

.card > p {
    line-height: 2em;
}

.confirmation_header{
    font-size: 4em;
    font-weight: 500;
}

.confirmation_thank_you {
    font-size: 3.2em;
}

.confirmation_orderid {
    font-size: 1.4em;
}
.confirmation_info {
    font-size: 2em;
}
</style>