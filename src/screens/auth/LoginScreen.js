import { SafeAreaView } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";

function LoginScreen() {
  return (
    <SafeAreaView>
      <AuthContent isLogin />
    </SafeAreaView>
  );
}

export default LoginScreen;
