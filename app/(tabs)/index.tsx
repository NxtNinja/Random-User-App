import UserCard from '@/components/UserCard';
import { User } from '@/utils/UserType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function MaleUserScreen() {
  const {data, isLoading, isFetching, isFetched, isSuccess} = useQuery({
    queryKey: ['male-users'],
    queryFn: async () => {
      const res = await axios.get("https://randomuser.me/api/?gender=male");
      const data = res.data as User

      return data.results[0];
    },
    refetchOnWindowFocus: false,
    retry: true
  })

  console.log(data);

  if (isFetched && isSuccess) {
    return (
      <UserCard info={data}/>
    );
  }
}


