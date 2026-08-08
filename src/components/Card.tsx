import { colors } from "@/constants/theme";
import { useState } from "react";
import {
    Image,
    type ImageSourcePropType,
    StyleSheet,
    TouchableOpacity,
    View,
    type ViewProps,
} from "react-native";
import { HeartIcon as HeartIconOutline } from "react-native-heroicons/outline";
import { HeartIcon as HeartIconSolid } from "react-native-heroicons/solid";
import CustomText from "./custom/CustomText";

interface CardProps extends ViewProps {
	image?: ImageSourcePropType | string;
	title?: string;
	duration?: number;
	calorie?: number;
	onPress?: () => void;
}

const Card = ({
	image,
	title = "Workout Now",
	duration = 0,
	calorie = 0,
	onPress,
}: CardProps) => {
	const [isFavourite, setFavourite] = useState(false);

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Image style={styles.image} source={image as ImageSourcePropType} />
				<View
					style={{
						width: 180,
						paddingVertical: 15,
						paddingHorizontal: 8,
						gap: 10,
						alignItems: "center",
					}}
				>
					<CustomText numberOfLines={2} variant="heading3">
						{title}
					</CustomText>
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
							•
						</CustomText>
						<CustomText variant="button" color="textSecondary">
							{calorie} kcal
						</CustomText>
					</View>
				</View>
				<TouchableOpacity
					style={{
						justifyContent: "center",
						alignSelf: "center",
						paddingLeft: 20,
					}}
					onPress={() => setFavourite(!isFavourite)}
				>
					{isFavourite ? (
						<HeartIconSolid color={colors.iconActive} />
					) : (
						<HeartIconOutline />
					)}
				</TouchableOpacity>
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
		// alignSelf: "stretch",
		marginVertical: 10,
		alignItems: "flex-start",
	},
	image: {
		width: "30%",
		height: "100%",
		borderRadius: 12,
		resizeMode: "cover",
	},
});
