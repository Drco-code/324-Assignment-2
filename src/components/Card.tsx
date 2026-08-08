import { colors } from "@/constants/theme";
import type { Href } from "expo-router";
import { useState } from "react";
import {
    Image,
    type ImageSourcePropType,
    StyleSheet,
    TouchableOpacity,
    View,
    type ViewProps,
} from "react-native";
import CustomText from "./custom/CustomText";

interface CardProps extends ViewProps {
	image?: ImageSourcePropType | string;
	title?: string;
	duration?: number;
	calorie?: number;
	href?: Href;
}

const Card = ({
	image,
	title = "Workout Now",
	duration = 0,
	calorie = 0,
}: CardProps) => {
	const [isFavourite, setFavourite] = useState(false);

	return (
		<TouchableOpacity>
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={image as ImageSourcePropType}
					// resizeMode="cover"
				/>
				<View style={{ paddingVertical: 15, paddingHorizontal: 8, gap: 10 }}>
					<CustomText variant="heading2">{title}</CustomText>
					<View
						style={{
							flexDirection: "row",
							gap: 8,
							alignSelf: "center",
						}}
					>
						<CustomText variant="button" color="textSecondary">
							{duration} min
						</CustomText>
						<CustomText variant="button" color="textSecondary">
							.
						</CustomText>
						<CustomText variant="button" color="textSecondary">
							{calorie} kcal
						</CustomText>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: colors.primaryLight,
		borderRadius: 12,
		height: 90,
		flexDirection: "row",
		alignSelf: "stretch",
		marginVertical: 10,
	},
	image: {
		width: "30%",
		height: "100%",
		borderRadius: 12,
		resizeMode: "cover",
	},
});
