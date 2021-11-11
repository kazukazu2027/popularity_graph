import axios from 'axios';
import useSWR from 'swr';

const key = {
  headers: {
    'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
  },
};

const fetcher = (url): Promise<any> => axios.get(url, key).then((res) => res.data);

const usePrefectureNames = () => {
  const { data, error } = useSWR('https://opendata.resas-portal.go.jp/api/v1/prefectures', fetcher);
  return { isLoading: !data, error, data: data };
};

export default usePrefectureNames;
