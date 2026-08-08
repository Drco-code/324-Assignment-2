import Card from "@/components/Card";
import CustomText from "@/components/custom/CustomText";
import { type Workout, workouts } from "@/data/workouts";
import { useRouter } from "expo-router";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
	const router = useRouter();
	// const imageSource = require("../../assets/workout-images/image 27.png");

	const handlePress = (item: Workout) => {
		router.push({ pathname: "/work-details", params: { id: item.id } });
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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

			<FlatList
				style={styles.list}
				data={workouts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Card
						onPress={() => handlePress(item)}
						image={item.image}
						title={item.title}
						calorie={item.calories}
						duration={item.duration}
					/>
				)}
				showsVerticalScrollIndicator={false}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		top: 50,
		flex: 1,
		paddingHorizontal: 20,
	},
	list: {},
});
