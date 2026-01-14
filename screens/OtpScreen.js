import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { useEffect, useRef, useState } from "react";
  import { otpStyles as styles } from "../styles/otpStyles";
  
  export default function OtpScreen({ route, navigation }) {
    const { phone } = route.params || {};
  
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(30);
  
    // refs for inputs
    const inputs = useRef([]);
  
    /* 🔁 RESEND TIMER */
    useEffect(() => {
      if (timer === 0) return;
  
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [timer]);
  
    /* 🔢 HANDLE OTP INPUT */
    const handleOtpChange = (value, index) => {
      if (!/^\d?$/.test(value)) return;
  
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // move to next input automatically
      if (value && index < 3) {
        inputs.current[index + 1].focus();
      }
    };
  
    /* ⬅️ HANDLE BACKSPACE */
    const handleKeyPress = (e, index) => {
      if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
        inputs.current[index - 1].focus();
      }
    };
  
    /* ✅ VERIFY OTP (MOCK) */
    const handleVerify = () => {
        const enteredOtp = otp.join("");
      
        if (enteredOtp.length !== 4) {
          alert("Enter complete OTP");
          return;
        }
      
        navigation.navigate("Signup", { phone });
      };
  
    /* 🔁 RESEND OTP */
    const handleResend = () => {
      setOtp(["", "", "", ""]);
      setTimer(30);
      inputs.current[0].focus();
      alert("OTP Resent (Mock)");
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
          <View style={styles.avatar} />
  
          <Text style={styles.title}>Verify Your Number</Text>
  
          <Text style={styles.subtitle}>
            Enter the 4-digit code sent to{"\n"}
            {phone || "XXXXXXXXXX"}
          </Text>
  
          {/* OTP INPUTS */}
          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
                <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                style={[
                  styles.otpBox,
                  otp[index] ? styles.otpBoxActive : null,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(value) =>
                  handleOtpChange(value, index)
                }
                onKeyPress={(e) =>
                  handleKeyPress(e, index)
                }
                autoFocus={index === 0}
              />
            ))}
          </View>
  
          {/* VERIFY BUTTON */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleVerify}
          >
            <Text style={styles.buttonText}>Verify Code</Text>
          </TouchableOpacity>
  
          {/* RESEND */}
          {timer > 0 ? (
            <Text style={styles.resendText}>
              Didn’t receive code?{" "}
              <Text style={styles.resendLink}>
                Resend in {timer}s
              </Text>
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={[styles.resendText, styles.resendLink]}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
  