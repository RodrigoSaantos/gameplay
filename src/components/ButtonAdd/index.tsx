import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
     <MaterialCommunityIcons 
      name="plus"
      color={theme.colors.heading}
      size={24}
     />
    </TouchableOpacity>
  );
}
