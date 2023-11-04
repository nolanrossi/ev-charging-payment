// ApplePay.js
import React from 'react';

const ApplePay = () => {
    // Load the external script when the component mounts
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://secure.networkmerchants.com/token/Collect.js";
        script.setAttribute("data-tokenization-key", "000000-000000-000000-000000");
        script.setAttribute("data-variant", "inline");
        script.setAttribute("data-country", "US");
        script.setAttribute("data-price", "1.00");
        script.setAttribute("data-currency", "USD");
        document.head.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <form action="submit_to_direct_post_api.php" method="post">
            <div id="applepaybutton"></div>
        </form>
    );
}

export default ApplePay;
