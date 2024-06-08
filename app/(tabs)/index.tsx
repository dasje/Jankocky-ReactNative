import { getObject, storeObject, storeValue } from "@/components/DataStore";
import { DieState, PlayerState } from "@/constants/GameContext";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  GestureResponderEvent,
} from "react-native";

import { FlatList, TextInput } from "react-native-gesture-handler";

export default function HomeTab() {
  const [listOfPlayers, setListOfPlayers] = useState<PlayerState[]>([]);

  const [newPlayerInput, setNewPlayerInput] = useState<string>("");
  const [addPlayer, setAddPlayer] = useState<boolean>(false);

  const createPlayer = () => {
    const newPlayerDice: DieState[] = [];
    for (var i = 0; i < 6; i++) {
      const di: DieState = { value: i + 1, held: false };
      newPlayerDice.push(di);
    }
    const newPlayer: PlayerState = {
      playerName: newPlayerInput,
      scoreHistory: [],
      diceSet: newPlayerDice,
    };
    var newPlayerList = [...listOfPlayers!, newPlayer];
    setListOfPlayers(newPlayerList);
  };

  const addPlayerToList = async (e: GestureResponderEvent) => {
    e.preventDefault();
    setAddPlayer(!addPlayer);
  };

  useEffect(() => {
    if (listOfPlayers!.length < 6 && newPlayerInput.length > 0 && addPlayer) {
      createPlayer();
      setNewPlayerInput("");
      setAddPlayer(!addPlayer);
    }
  }, [addPlayerToList]);

  const savePlayerList = async () => {
    await storeObject("currentPlayerSet", listOfPlayers);
  };

  return (
    <View style={styles.container}>
      <Text>Tab [Home]</Text>
      <Text>Add players</Text>
      <TextInput value={newPlayerInput} onChangeText={setNewPlayerInput} />
      <Button title="Add a player" onPress={addPlayerToList} />
      {listOfPlayers.length > 0 ? (
        <FlatList
          data={listOfPlayers}
          renderItem={({ item }) => <Text>{item.playerName}</Text>}
        />
      ) : (
        <View />
      )}
      <Link href="/game/main">
        <Button title="Play!" onPress={savePlayerList} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
