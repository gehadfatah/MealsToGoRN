import React, {useContext} from "react";
import LottieView from "lottie-react-native";

import {Spacer} from "../../../components/spacer/spacer.component";
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    Title,
  AnimationWrapper,
} from "../components/account.styles";
import {AuthenticationContext} from "../../../services/authentication/authentication.context";

export const AccountScreen = ({navigation}) => {
    const {seterronul} = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover/>
            <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => {
                        seterronul()
                        navigation.navigate("Login")
                    }}
                >
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => {
                            seterronul()
                            navigation.navigate("Register")
                        }
                        }
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};
