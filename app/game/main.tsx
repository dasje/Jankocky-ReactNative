import { getObject } from "@/components/DataStore";
import { PlayerState } from "@/constants/GameContext";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Dice from "react-dice-roll";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameMain() {
  const [players, setPlayers] = useState<PlayerState[]>();

  useEffect(() => {
    const fetchPlayers = async () => {
      const fetchedPlayers = await getObject("currentPlayerSet");
      setPlayers(fetchedPlayers);
    };
    fetchPlayers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.diceRow}>
          <View style={styles.diStyle}>
            <Dice size={100} onRoll={(value) => console.log(value)} />
          </View>
          <View style={styles.diStyle}>
            <Dice size={100} onRoll={(value) => console.log(value)} />
          </View>
        </View>
        <View style={styles.diceRow}>
          <View style={styles.diStyle}>
            <Dice size={100} onRoll={(value) => console.log(value)} />
          </View>
          <View style={styles.diStyle}>
            <Dice size={100} onRoll={(value) => console.log(value)} />
          </View>
        </View>
        <View style={styles.diceRow}>
          <View style={styles.diStyle}>
            <Dice size={100} onRoll={(value) => console.log(value)} />
          </View>
          <View style={styles.diStyle}>
            <Dice size={100} onRoll={(value) => console.log(value)} />
          </View>
        </View>
      </View>
      <SafeAreaView style={styles.footer}>
        <View
          style={{
            height: 48,
            backgroundColor: "purple",
            alignContent: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Current player: Dummy name
          </Text>
        </View>
        <View
          style={{
            height: 48,
            backgroundColor: "purple",
            alignContent: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
          }}
        >
          <Link href="/">
            <Button title="Back to home" onPress={() => {}} />
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  diStyle: {
    padding: 20,
  },
  diceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  footer: { height: 100, width: "100%" },
});
