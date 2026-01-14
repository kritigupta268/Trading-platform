import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { loginStyles as styles } from "../styles/loginStyles";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    // TEMP: direct navigation to OTP
    // Later we will add AsyncStorage logic here
    navigation.navigate("Otp", { phone });
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient
        colors={["#5B3DF5", "#7B5CFF"]}
        style={styles.header}
      >
        <View style={styles.logo} />
        <Text style={styles.appName}>SecureAuth</Text>
        <Text style={styles.tagline}>
          Secure & Simple Authentication
        </Text>
      </LinearGradient>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Enter your mobile number to continue
        </Text>

        <Text style={styles.label}>Mobile Number</Text>

        <View style={styles.phoneRow}>
          <View style={styles.countryBox}>
            <Text style={styles.flag}>🇮🇳</Text>
            <Text style={styles.code}>+91</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter 10 digit number"
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.helper}>
          We'll send you an OTP to verify your number.{"\n"}
          Standard rates may apply.
        </Text>

        <View style={styles.features}>
          <Text style={styles.feature}>Secure</Text>
          <Text style={styles.feature}>Encrypted</Text>
          <Text style={styles.feature}>Fast</Text>
        </View>
      </View>
    </View>
  );
}
