import React, {useState} from 'react'
import {View,Text, TextInput} from 'react-native'
import { StyleSheet } from 'react-native'

import design from '../design.json'
import CTAButton from '../Components/CTAButton'
import Button from '../Components/Button'
import {BACKEND_URL} from '@env'

export default function OnBoardingTwo ({navigation}) {
    const [value,setValue] = useState("")
    const [identities, setIdentities] = useState([])

    const generateIdentity = async () => {


       const res = await fetch(`${BACKEND_URL}/ai`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         goal: value
       })
    })

        const data = await res.json()

        console.log(data);

        setIdentities(data.identities || [])
    }

   return( 
   <View style={styles.container}>
        <Text style={styles.title}>Goal</Text>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder='Write specific goal'
        style={{
            width: design.size.inputWidth,
            borderRadius: design.radius.primary,
            backgroundColor: '#fff',
            marginTop: design.spacing.lg,
            borderColor: 'black',
            borderWidth: 1,
            padding: design.spacing.s,
            fontSize: design.typography.body.fontSize
        }}/>
        <CTAButton title={"Start"} style={{marginTop: 32}}
        onPress={generateIdentity}/>
        <Text style={styles.title2}>Choose Identity</Text>
        <View></View>
        {identities.map((identity, index)=> (
         <Button
           key={index}
           style={{marginTop: 24}}
           title={identity}
           onPress={() => navigation.navigate("HomeScreen")}
         />
        ))}
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: design.colors.background,
        alignItems: 'center'
    },
    title: {
        marginTop: design.spacing.xxxl,
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
        textAling: 'center'
    },
    title2: {
        marginTop: design.spacing.xlg,
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
        textAling: 'center'
    }
})

