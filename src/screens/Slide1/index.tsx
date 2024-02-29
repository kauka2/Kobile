import { ImageBackground, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import { styles } from "./styles";
import { ButtonSlide } from "../../components/ButtonSlide"

export function Slide1() {
    const slide = require ("../../assets/rx7.png")
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>
                <ButtonSlide />
                <ButtonSlide />
                <ButtonSlide />
            </View>
        </ImageBackground>
    )
}