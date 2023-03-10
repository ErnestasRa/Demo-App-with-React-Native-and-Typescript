const get = async (url: string) => {
    const options: RequestInit = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'content-type': 'application/json',
        },
    };
    const res = await fetch(`${url}`, options);
    return res.json();
};

export default get;
