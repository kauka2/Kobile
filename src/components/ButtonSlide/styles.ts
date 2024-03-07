import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyle";

export const styles = StyleSheet.create({
    ball: {
        width: 30,
        height: 30,
        backgroundColor: colors.red,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.grey,
    }
})