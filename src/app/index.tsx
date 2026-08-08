import Card from "@/components/Card";
import CustomText from "@/components/custom/CustomText";
import { workouts } from "@/data/workouts";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
	const imageSource = require("../../assets/workout-images/image 27.png");

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
				renderItem={({ item }) => <Card image={item.image} />}
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
