import { AsyncStorage } from 'react-native';

const saveCart = async params => {
  await AsyncStorage.setItem('@cart', JSON.stringify(params));
};

export default saveCart;
