import {Text, View, StyleSheet} from 'react-native'

import design from '../design.json'

export default function Tooltip () {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Tooltip</Text>
            <Text style={styles.tooltip}>Change your mind. Highlight the benefits of avoiding your bad habits.</Text>
            <Text style={styles.tooltip}>Create a motivation ritual. Do something you enjoy right before the hard habit.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: design.colors.background
    },
    tooltip:{
        backgroundColor: design.colors.primary,
        borderRadius: 12,
        paddingTop: 24,
        paddingBottom: 24,
        width: 344,
        alignItems: 'center',
        fontSize: design.typography.body.fontSize,
        fontWeight: design.typography.body.fontWeight,
        textAlign: 'center',
        marginBottom: 24
    },
    title: {
        marginTop: 136,
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
        marginBottom: 32
    },
})