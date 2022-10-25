import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

export default function App() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View className="flex-1 items-center justify-center bg-green-m">
      <StatusBar style="auto" />
      <View className="w-full h-[750px] bg-orange-100 mb-40 rounded-bl-full">
        <Image source={require('./assets/bonsai.png')}/>
        <View className="flex flex-row gap-6 ml-60">
          <Text className="font-bold text-xl">Qtd: {count}</Text>
          <Icon name="hearto" size={30}/>
        </View>
        <View className="items-center mt-16">
          <Text className="text-xl text-black font-bold">Bonsai de palmeira</Text>
          <View className="mt-2">
            <Text className="text-2xl text-white">R$44.00</Text>
          </View>
          <View className="gap-4 mt-0">
            <TouchableOpacity onPress={onPress} className="w-32 h-10 bg-orange-100 text-4xl items-center justify-center rounded-full">
              <Text>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
