import CustomText from "@/components/custom/CustomText";
import { colors } from "@/constants/theme";
import { workouts } from "@/data/workouts";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
	FlatList,
	Image,
	StyleSheet,
	TouchableOpacity,
	View,
} from "react-native";
import { ClockIcon, FireIcon } from "react-native-heroicons/outline";

export default function WorkoutDetailsScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const [completed, setCompleted] = useState(false);

	const workout = workouts.find((w) => w.id === id);
	if (!workout) return <CustomText>Workout not found</CustomText>;

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			style={styles.container}
			data={workout.exercises}
			keyExtractor={(item, index) => index.toString()}
			ListHeaderComponent={
				<>
					<View>
						<Image source={{ uri: workout.image }} style={styles.headerImage} />
					</View>
					<View style={styles.content}>
						<CustomText variant="heading1">{workout.title}</CustomText>
						<View style={styles.metaRow}>
							<ClockIcon size={18} color={colors.textSecondary} />
							<CustomText variant="body" color="textSecondary">
								{workout.duration} min
							</CustomText>
							<FireIcon size={18} color={colors.textSecondary} />
							<CustomText variant="body" color="textSecondary">
								{workout.calories} kcal
							</CustomText>
						</View>
						<CustomText variant="heading3" style={{ marginTop: 20 }}>
							About
						</CustomText>
						<CustomText variant="body" color="textSecondary">
							{workout.description}
						</CustomText>
						<CustomText variant="heading3" style={{ marginTop: 20 }}>
							Exercises
						</CustomText>
					</View>
				</>
			}
			renderItem={({ item }) => (
				<View style={styles.exerciseRow}>
					<View style={styles.dot} />
					<CustomText variant="body">{item}</CustomText>
				</View>
			)}
			ListFooterComponent={
				<TouchableOpacity
					style={[styles.button, completed && styles.buttonCompleted]}
					onPress={() => setCompleted(!completed)}
				>
					<CustomText variant="button" color="surface">
						{completed ? "✓ Completed" : "Start Workout"}
					</CustomText>
				</TouchableOpacity>
			}
			contentContainerStyle={{ paddingBottom: 40 }}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		marginHorizontal: 20,
	},
	headerImage: { width: "100%", height: 260, borderRadius: 12, marginTop: 20 },
	content: { padding: 16 },
	metaRow: { flexDirection: "row", gap: 8, alignItems: "center", marginTop: 8 },
	exerciseRow: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 12,
		gap: 12,
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: colors.primary,
	},
	button: {
		backgroundColor: colors.overlay,
		margin: 16,
		padding: 16,
		borderRadius: 16,
		alignItems: "center",
	},
	buttonCompleted: { backgroundColor: colors.success },
});
