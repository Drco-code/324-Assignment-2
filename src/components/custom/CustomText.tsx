import { colors, typography } from "@/constants/theme";
import { Text, type TextProps } from "react-native";

interface CustomTextProps extends TextProps {
	variant?: keyof typeof typography;
	color?: keyof typeof colors;
}

const CustomText = ({
	variant = "body",
	color,
	style,
	...props
}: CustomTextProps) => {
	return (
		<Text
			style={[typography[variant], style, { color: colors[color] }]}
			{...props}
		/>
	);
};

export default CustomText;

// const styles = StyleSheet.create({});
