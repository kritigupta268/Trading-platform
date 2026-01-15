import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "REGISTERED_USERS";

/* Get all registered users */
export const getRegisteredUsers = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

/* Check if phone is registered */
export const isUserRegistered = async (phone) => {
  const users = await getRegisteredUsers();
  return users.includes(phone);
};

/* Register new user */
export const registerUser = async (phone) => {
  const users = await getRegisteredUsers();
  if (!users.includes(phone)) {
    users.push(phone);
    await AsyncStorage.setItem(KEY, JSON.stringify(users));
  }
};
