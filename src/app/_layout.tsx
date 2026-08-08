import { colors } from "@/constants/theme";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";

export default function RootLayout() {
	const router = useRouter();

	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="work-details"
				options={{
					title: "",
					headerShown: true,
					headerBackButtonDisplayMode: "default",
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => router.back()}
							style={{ paddingLeft: 8 }}
						>
							<ChevronLeftIcon size={24} color={colors.primaryDark} />
						</TouchableOpacity>
					),
				}}
			/>
		</Stack>
	);
}
