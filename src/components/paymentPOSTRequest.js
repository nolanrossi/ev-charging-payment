import axios from 'axios';


export async function NmiPayment(amount, paymentToken, cardNumber, ccExp, secCode, firstName, lastName) {

    function convertQueryStringToObject(queryString) { // payment processer returns query string, this is so we can view their response easily
        const obj = {};
        const pairs = queryString.split('&');
        
        for (const pair of pairs) {
            const [key, value] = pair.split('=');
            const decodedKey = decodeURIComponent(key);
            const decodedValue = decodeURIComponent(value || '');

            if (obj[decodedKey]) {
                if (Array.isArray(obj[decodedKey])) {
                    obj[decodedKey].push(decodedValue);
                } else {
                    obj[decodedKey] = [obj[decodedKey], decodedValue];
                }
            } else {
                obj[decodedKey] = decodedValue;
            }
        }
   
     return obj;
   }
   
    //  const security_key = await getSecret("nmi_security_key"); //emailed to me, go update; basic api key
    const security_key = '8FA45DsrgH289gU2H49424d48Zw63B54'; //Test Key
   
    const data = new URLSearchParams(); // 
    data.append('security_key', security_key);
    data.append('type', 'sale');
    data.append('amount',  amount);
    data.append('payment_token', paymentToken)
    // data.append('ccnumber', cardNumber);
    // data.append('ccexp', ccExp);
    // data.append('cvv', secCode);  
    data.append('first_name', firstName);
    data.append('last_name', lastName);

    console.log(data)


    return new Promise((resolve, reject) => {
    axios
        .post('https://secure.nmi.com/api/transact.php', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(function (response) {
            console.log(response)
            const message = convertQueryStringToObject(response.data);
            console.log(message)
            resolve(message);
            // return message
        })
        .catch(function (error) {
            reject(error)
        });
    });
   }
   