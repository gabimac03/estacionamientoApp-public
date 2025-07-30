import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  colorsExport as colors,
  spacingExport as spacing,
  typographyExport as typography,
} from "../scripts/styles/style";

const { width } = Dimensions.get("window");

const CustomAlert = ({ visible, title, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>{title}</Text>
          {message.split("\n").map((linea, index) => (
            <Text key={index} style={styles.alertMessage}>
              {linea}
            </Text>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✅ ENTENDIDO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    backgroundColor: colors.white,
    borderRadius: spacing.sm,
    padding: spacing.lg,
    width: width * 0.85,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  alertTitle: {
    fontSize: typography["2xl"],
    fontWeight: "bold",
    color: colors.success,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  alertMessage: {
    fontSize: typography.base,
    color: colors.dark,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  closeButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xs,
    marginTop: spacing.sm,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: typography.base,
    fontWeight: "bold",
  },
});

export default CustomAlert;
