import React from "react";

export default function ReactPayPal(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          height: 40,
        },

        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: props.currency,
                  value: props.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(data);
          console.log(order);
          props.onSuccess(order, props.total);
        },
        onError: (err) => {
          //   setError(err),
          console.error(err);
          alert(err);
        },
      })
      .render(paypalRef.current);
  }, [props.total, props.currency]);

  // If the payment has been made

  // Default Render
  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
}
