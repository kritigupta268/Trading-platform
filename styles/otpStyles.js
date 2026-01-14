import { StyleSheet } from "react-native";

export const otpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  logo: {
    width: 48,
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
  },

  appName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  tagline: {
    color: "#E0DBFF",
    fontSize: 12,
    marginTop: 4,
  },

  content: {
    padding: 20,
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E5E7EB",
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 24,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  otpBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  
  otpBoxActive: {
    borderColor: "#5B3DF5",
    backgroundColor: "#EEF2FF",
  },
 
  button: {
    backgroundColor: "#5B3DF5",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  resendText: {
    fontSize: 12,
    color: "#6B7280",
  },

  resendLink: {
    color: "#5B3DF5",
    fontWeight: "600",
  },
});
