import { TouchableOpacity,Text, StyleSheet } from "react-native";

import design from '../design.json'

export default function CTAButton({onPress, title,style}) {
    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: design.colors.ctaButton,
        borderRadius: design.radius.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: design.spacing.md,
        paddingVertical: design.spacing.s,
        borderRadius: 24,
    },
    text: {
        fontSize: design.typography.button.fontSize,
        fontWeight: design.typography.button.fontWeight
    }
})