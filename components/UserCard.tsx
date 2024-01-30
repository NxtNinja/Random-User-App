import { Result } from '@/utils/UserType';
import { useQueryClient } from '@tanstack/react-query';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const UserCard = ({ info }: { info: Result }) => {
	const queryClient = useQueryClient();
	const refetch = async (gender: string) => {
		if (gender == 'male') {
			queryClient.invalidateQueries({ queryKey: ['male-users'] });
		} else {
			queryClient.invalidateQueries({ queryKey: ['female-users'] });
		}
	};
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: info.picture.large }} />
			<Text style={styles.title}>
				{info.name.title} {info.name.first} {info.name.last}
			</Text>
			<Text style={styles.email}>{info.email}</Text>
			<Text style={styles.address}>
				{info.location.street.number}, {info.location.street.name},{' '}
				{info.location.city} {info.location.state},{' '}
				{info.location.country}-{info.location.postcode}
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => refetch(info.gender)}>
				<Text style={styles.buttonLabel}>Refetch</Text>
			</TouchableOpacity>
		</View>
	);
};

export default UserCard;

const styles = StyleSheet.create({
	container: {
		padding: 5,
		gap: 10,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		borderRadius: 100,
		width: 150,
		height: 150,
		resizeMode: 'cover',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	email: {
		fontSize: 18,
		fontWeight: '500',
	},
	address: {
		fontSize: 18,
		fontWeight: '300',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	button: {
		borderRadius: 10,
		width: '100%',
		padding: 10,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: 5,
	},
	buttonLabel: {
		color: '#fff',
		fontSize: 16,
	},
});
