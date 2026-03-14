import {View, Text,TextInput, StyleSheet, TouchableOpacity, Image} from "react-native"
import design from '../design.json'
import TabIcon from "../Components/TabIcon"
import CTAButton from '../Components/CTAButton'
import React, {useState} from "react"
import Button from '../Components/Button'
import { useContext } from "react"
import { VoteContext } from "../context/VoteContext"


export default function ActionScreen ({navigation}) {
    const [value,setValue] = useState("")
   
    const [actions, setActions] = useState([])
    
    const [showTooltip,setShowTooltip] = useState (true)
    
    const [showAddAction, setShowAddAction] = useState(true)
    
    const [showCTAButton, setShowCTAButton] = useState(null) 

    const {addBetterVotes, addSameVotes} = useContext(VoteContext)

    
    const handleAddAction = () => {
        if(value.trim() === '') return;
        setActions([...actions, value.trim()])
        setValue("")
    }

    const handleActionClicked = (index) => {
        setShowCTAButton(showCTAButton === index ? null : index )
    }
    const handleDone = (index) => {
        addBetterVotes()
        setActions(prev => prev.filter((_, i) => i !== index))
        setShowCTAButton(null)
    }

    const handleNotDone = (index) => {
        addSameVotes()
        setActions(prev => prev.filter((_, i) => i !== index))
        setShowCTAButton(null)
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.notification}
            onPress={() => navigation.navigate("OnBoardingOne")}>
                <TabIcon focused={false} 
                icon={require("../assets/notification-icon.png")} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.title}>Actions</Text>
                {actions.length < 8 && (
                <View style={styles.addActions}>
                    <Text style={styles.actionName}>Action Name</Text>
                    <TextInput placeholder="Write spicific action"
                    style={styles.input}
                    value={value}
                    onChangeText={setValue}/>
                    <CTAButton title={"Add"} style={{marginTop: 24}}
                    onPress={handleAddAction}/>
                </View>
                )}
            </View>
            <View style={styles.actionCard}>
                {actions.map((action, index) => (
                    <TouchableOpacity style={styles.actionItem} onPress={() => handleActionClicked(index)} key={index} activeOpacity={0.8}>
                <Text style={styles.actionText}>{action}</Text>
                {showCTAButton === index && (
                    <View style={styles.expandedContent}>
                <CTAButton
                    title="Done"
                    style={{marginTop: 24}}
                    onPress={() => handleDone(index)}
                />
                <CTAButton
                    title="Not Done"
                    style={{marginTop: 24, backgroundColor: 'white'}}
                    onPress={() => handleNotDone(index)}
                />
                </View>
                )}
                    </TouchableOpacity>
                ))}
            </View>
            {actions.length === 0 && (
                <View style={styles.content}>
                    <Text style={styles.tooltip}>
                        Do same actions like person you want to become.
                    </Text>
                </View>
            )}
        </View>
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
    content: {
        alignItems: 'center',
        marginTop: 136,
    },
    title: {
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
    },
    addActions: {
        backgroundColor: design.colors.primary,
        borderRadius: 12,
        paddingTop: 24,
        paddingBottom: 24,
        width: 344,
        marginTop: 32,
        alignItems: 'center'
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
        borderColor: '#000',
        borderWidth: 1,
        padding: design.spacing.s,
        fontSize: design.typography.body.fontSize,
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
        textAlign: 'center'
    },
    actionCard:{
        alignItems: 'center',
        marginTop: 24
    },
    actionItem:{
        backgroundColor: design.colors.primary,
        width: 344,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16
    },

    expandedContent:{
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 16,
    },

    actionText:{
       fontSize: design.typography.card.fontSize,
       fontWeight: design.typography.card.fontWeight,
    }
})