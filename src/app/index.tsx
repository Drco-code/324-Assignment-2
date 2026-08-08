import Card from "@/components/Card";
import CustomText from "@/components/custom/CustomText";
import { type Workout, workouts } from "@/data/workouts";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
	const router = useRouter();

	const handlePress = (item: Workout) => {
		router.push({ pathname: "/work-details", params: { id: item.id } });
	};

	return (
		<FlatList
			style={styles.container}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
			data={workouts}
			keyExtractor={(item) => item.id}
			ListHeaderComponent={
				<View>
					<CustomText variant="heading1">WorkOuts</CustomText>
					<CustomText
						variant="body"
						color="textTertiary"
						style={{ marginBottom: 20 }}
					>
						Find the best workout for you
					</CustomText>
				</View>
			}
			renderItem={({ item }) => (
				<Card
					onPress={() => handlePress(item)}
					image={item.image}
					title={item.title}
					calorie={item.calories}
					duration={item.duration}
				/>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		top: 50,
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
});
