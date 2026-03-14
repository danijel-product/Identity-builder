import React, {useState} from 'react'
import {Text,View, TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import CTAButton from '../Components/CTAButton'
import design from '../design.json'
import Button from '../Components/Button'

export default function AssessScreen () {
    const [value,setValue] = useState("")
    const [assess, setAssess] = useState([])

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState (" ")

    const handleMenuToggle = () => {
        setOpen(prev => !prev)
    }



    const handleAddAssess = () => {
        if(value.trim() === '') return;
        setAssess([...assess, value.trim()])
        handleMenuToggle
        setValue("")
    }
   return( 
   <View style={styles.container}>
        <Text style={styles.title}>Assess</Text>
        <View style={styles.content}>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder='Write specific goal'
        style={{
            borderRadius: design.radius.primary,
            width: 256,
            height: 56,
            backgroundColor: '#fff',
            borderColor: 'black',
            borderWidth: 1,
            padding: design.spacing.s,
            fontSize: design.typography.body.fontSize
        }}/>
        <View>
            <TouchableOpacity onPress={() => handleMenuToggle()}
                style={styles.dropdownButton}>
                <Text style={styles.assessOption}>{selected}</Text>
            </TouchableOpacity>
            {open && (
            <View style={styles.dropdownMenu}>
                <TouchableOpacity onPress={() =>
                   { setSelected('+')
                    setOpen(false)
                }}
                style={styles.dropdownItem}>
                    <Text style={styles.assessOption}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => 
                    { setSelected('-')
                        setOpen(false)
                }}
                style={styles.dropdownItem}>
                    <Text style={styles.assessOption}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => 
                    { setSelected('=')
                        setOpen(false)  
                }}
                style={styles.dropdownItem}>
                   <Text style={styles.assessOption}>=</Text>
                </TouchableOpacity>
            </View>
            )}
        </View>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: design.colors.background,
        alignItems: 'center',

    },
    title: {
        marginTop: design.spacing.xxxl,
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
        textAling: 'center'
    },
    content:{
        flexDirection: 'row',
        gap: 16,
        marginTop: 32,
    },

dropdownButton: {
  height: 56,
  width: 48,
  alignItems: 'center',
  padding:16,
  borderRadius:12,
  backgroundColor: design.colors.ctaButton,
},

dropdownMenu:{
    backgroundColor: design.colors.ctaButton,
    marginTop:8,
    borderRadius:12,
    alignItems: 'center',
},

dropdownItem:{
  padding:16,
  backgroundColor: design.colors.ctaButton,
  borderRadius:12,
},
assessOption: {
    fontSize: 16,
    fontWeight: design.typography.button.fontWeight,
    alignSelf: 'center'
}
})