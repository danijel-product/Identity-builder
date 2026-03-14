import { View, Image } from 'react-native';

export default function TabIcon({ focused, icon }) {
  return (
    <View
      style={{
        width: 48,     
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: focused ? '#000' : 'transparent',
        borderRadius: 22,
      }}
    >
      <Image
        source={icon}
        style={{ 
            width: 24, 
            height: 24, 
            tintColor: focused ? '#fff' : '#000',
        }} 
      />
    </View>
  );
}