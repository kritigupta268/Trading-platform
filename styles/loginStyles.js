import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 220,
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
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  countryBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    marginRight: 10,
  },

  flag: {
    fontSize: 16,
    marginRight: 6,
  },

  code: {
    fontSize: 14,
    fontWeight: "500",
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
  },

  button: {
    backgroundColor: "#5B3DF5",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  helper: {
    textAlign: "center",
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 20,
  },

  features: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  feature: {
    fontSize: 12,
    color: "#6B7280",
  },
});
