import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data);
    //     })
    //     }, [])

    if (!data) return <div>Loading...</div>;
    return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
        GitHub Followers: {data.followers}
    </div>
    );
}

export default Github;

