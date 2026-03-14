import React, {useState, useEffect} from "react"
import {View, Text,TextInput, StyleSheet, TouchableOpacity, Image} from "react-native"
import design from '../design.json'
import TabIcon from "../Components/TabIcon"
import { useContext } from "react"
import { VoteContext } from "../context/VoteContext"


export default function HomeScreen({navigation}) {
    const {betterVotes, sameVotes} = useContext(VoteContext)

    return(
        <>
        <View style={styles.container}>
        <TouchableOpacity style={styles.notification}
        onPress={() => navigation.navigate("OnBoardingOne")}>
        <TabIcon
          focused={false} 
          icon={require("../assets/notification-icon.png")}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Votes</Text>
      <View style={styles.iconsRow}>
        <View style={styles.same}>
            <Text>Same</Text>
            <Image source={require("../assets/diversity.png")} />
            <Text>{sameVotes}</Text>
        </View>
        <View style={styles.better}>
            <Text>Better</Text>
            <Image source={require("../assets/diversity.png")} />
            <Text>{betterVotes}</Text>
        </View>
      </View>
      </View>
      <View style={styles.content2}>
        <Text style={styles.title}>Actions</Text>
        <View style={styles.actions}>
            <Text style={styles.actionName}>Action Name</Text>
            <TextInput placeholder="Action One"
            style={styles.input}
            editable={false} />
            <Text style={styles.actionName}>Action Name</Text>
            <TextInput placeholder="Action Two"
            style={styles.input}
            editable={false} />
            <Text style={styles.actionName}>Action Name</Text>
            <TextInput placeholder="Action Three"
            style={styles.input}
            editable={false} />
        </View>
      </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: design.colors.background,
    },
    notification: {
        position: 'absolute',
        top: 64,
        right: 32,
        borderColor: '#333',
    },
    title: {
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
    },
    content: {
        alignItems: 'center',
        marginTop: 136,
    },
    iconsRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 32,
        paddingHorizontal: 32,
    },
    same: {
        alignItems: 'center',
        gap: 8,
        width: 48
    },
    better:{
        width: 48,
        alignItems: 'center',
        gap: 8,
    },
    content2: {
        alignItems: 'center',
        marginTop: 64,
    },
    actions: {
        backgroundColor: design.colors.primary,
        borderRadius: 12,
        paddingTop: 24,
        paddingLeft: 16,
        paddingBottom: 8,
        width: 344,
        marginTop: 32,
    },
    actionName:{
        fontSize: design.typography.card.fontSize,
        fontWeight: design.typography.card.fontWeight,
    },
    input: {
        width: design.size.inputWidth,
        borderRadius: design.radius.primary,
        backgroundColor: '#fff',
        marginTop: design.spacing.xs,
        marginBottom: 16,
        borderColor: '#000',
        borderWidth: 1,
        padding: design.spacing.s,
        fontSize: design.typography.body.fontSize,
    }
})
