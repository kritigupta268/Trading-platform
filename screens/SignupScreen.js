import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import { signupStyles as styles } from "../styles/signupStyles";
  import { useState } from "react";
  
  export default function SignupScreen({ route, navigation }) {
    const { phone } = route.params || {};
  
    const [form, setForm] = useState({
      fullName: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      gst: "",
      userType: "",
    });
  
    const handleChange = (key, value) => {
      setForm({ ...form, [key]: value });
    };
  
    const handleContinue = () => {
      console.log("Signup Data:", form);
      alert("Signup Completed (Mock)");
      // Later → save to AsyncStorage or navigate to Home
      // navigation.navigate("Home");
    };
  
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Complete your profile to continue
              </Text>
  
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John Doe"
                value={form.fullName}
                onChangeText={(v) => handleChange("fullName", v)}
              />
  
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="john@example.com"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(v) => handleChange("email", v)}
              />
  
              <Text style={styles.label}>Address line 1</Text>
              <TextInput
                style={styles.input}
                value={form.address1}
                onChangeText={(v) => handleChange("address1", v)}
              />
  
              <Text style={styles.label}>Address line 2</Text>
              <TextInput
                style={styles.input}
                value={form.address2}
                onChangeText={(v) => handleChange("address2", v)}
              />
  
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                value={form.city}
                onChangeText={(v) => handleChange("city", v)}
              />
  
              <Text style={styles.label}>State</Text>
              <TextInput
                style={styles.input}
                value={form.state}
                onChangeText={(v) => handleChange("state", v)}
              />
  
              <Text style={styles.label}>Zip Code</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={form.zip}
                onChangeText={(v) => handleChange("zip", v)}
              />
  
              <Text style={styles.label}>Country</Text>
              <TextInput
                style={styles.input}
                value={form.country}
                onChangeText={(v) => handleChange("country", v)}
              />
  
              <Text style={styles.label}>GST Number</Text>
              <TextInput
                style={styles.input}
                value={form.gst}
                onChangeText={(v) => handleChange("gst", v)}
              />
  
              <Text style={styles.label}>User Type</Text>
              <TextInput
                style={styles.input}
                placeholder="Retailer / Wholesaler"
                value={form.userType}
                onChangeText={(v) => handleChange("userType", v)}
              />
  
              <TouchableOpacity
                style={styles.button}
                onPress={handleContinue}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  