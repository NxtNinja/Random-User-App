import UserCard from '@/components/UserCard';
import { User } from '@/utils/UserType';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function FemaleUserScreen() {
	const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
		queryKey: ['female-users'],
		queryFn: async () => {
			const res = await axios.get('https://randomuser.me/api/', {
				params: {
					gender: 'female',
				},
			});
			const data = res.data as User;

			return data.results[0];
		},
		refetchOnWindowFocus: false,

		// retry: true,
	});

	console.log(data);

	if (isFetched && isSuccess) {
		return <UserCard info={data} />;
	}
}
