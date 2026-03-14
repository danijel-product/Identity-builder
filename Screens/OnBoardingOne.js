import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import design from '../design.json'
import Button from "../Components/Button";

export default function OnBoardingOne ({navigation}) {
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Pick Category</Text>
           <Button title="Health/Fitness" style={{ marginTop: 32 }} 
           onPress={() => navigation.navigate("OnBoardingTwo")}/>
           <Button title="Career/Skills" style={{ marginTop: 24 }} 
           onPress={() => navigation.navigate("OnBoardingTwo")}/>
           <Button title="Finance" style={{ marginTop: 24 }} 
           onPress={() => navigation.navigate("OnBoardingTwo")} />
           <Button title="Mindset" style={{ marginTop: 24 }} 
           onPress={() => navigation.navigate("OnBoardingTwo")}/>
           <Button title="Relationship" style={{ marginTop: 24 }} 
           onPress={() => navigation.navigate("OnBoardingTwo")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DCFFD8'
    },
    title:{
        marginTop: design.spacing.xxxl,
        fontSize: design.typography.title.fontSize,
        fontWeight: design.typography.title.fontWeight,
        textAlign: 'center'
    },
})