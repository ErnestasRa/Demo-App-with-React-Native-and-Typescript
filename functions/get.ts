import get from './http';

const getData = async (url: string, setData: React.Dispatch<React.SetStateAction<MovieType[]>>) => {
    const res = await get(`${url}`);
    if (!res.error) {
        setData(res.results);
    } else {
        throw new Error('Error');
    }
};

export default getData;
