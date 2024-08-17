import { Text, View } from "react-native";
import Login from './../components/Login';
import { Redirect } from "expo-router";
export default function Index() {
  const loggedin = true;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      { loggedin? 
      <Redirect href={'/tabs'} /> :
      <Login />
      }
    </View>
  );
}
