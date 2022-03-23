import { Image, View } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://www.freeiconspng.com/uploads/discord-chat-for-gamers-social-networking-icon-9.png"
  return (
    <Image 
      style={styles.image} 
      source={{ uri }} 
      resizeMode="cover"
    />
  );
}
