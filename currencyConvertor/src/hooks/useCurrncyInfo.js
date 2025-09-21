import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c9fd0156a0bafa23e669bcb1/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setdata(res.conversion_rates));
    }, [currency]);
    return data;
}

export default useCurrencyInfo