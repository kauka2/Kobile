import { ImageBackground, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle"
import { styles } from "./styles";
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPage } from "../../../App";

export function Slide1({ setPageI }: IPage) {
    const slide = require ("../../assets/rx7.png")
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>
                <ButtonSlide onPressI={() => setPageI(1)} />
                <ButtonSlide onPressI={() => setPageI(2)} />
                <ButtonSlide onPressI={() => setPageI(3)} />
                <ButtonSlide onPressI={() => setPageI(4)} />
            </View>
        </ImageBackground>
    )
}