import { StyleSheet } from "react-native";

export const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  logo: {
    width: 48,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 10,
  },

  appName: {
    color: "#FFFFFF",
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
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 20,
    textAlign: "center",
  },

  label: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 12,
    color: "#111827",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    backgroundColor: "#FFFFFF",
  },

  button: {
    backgroundColor: "#5B3DF5",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
    marginBottom: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
