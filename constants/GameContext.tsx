export type DieState = {
  value: number;
  held: boolean;
};

export type PlayerState = {
  playerName: string | null | undefined;
  scoreHistory: number[];
  diceSet: { [diceNumber: number]: DieState };
};

export type GameState = {};

// type GameStateContext = {
//   players: PlayerState[] | null;
//   setPlayers: Dispatch<SetStateAction<PlayerState[] | null>>;
// };

// // const GameContext = createContext<GameStateContext | undefined>(undefined);

// // function useGameContext(): GameStateContext {
// //   const context = useContext(GameContext);
// //   if (!context) {
// //     throw new Error(
// //       "useGameContext must be used within an GameContextProvider"
// //     );
// //   }
// //   return context;
// // }

// // const GameContextProvider = (props: { children: ReactNode }): ReactElement => {
// //   const [players, setPlayers] = useState<PlayerState[] | null>(null);

// //   return <GameContext.Provider {...props} value={{ players, setPlayers }} />;
// // };

// // export { GameContextProvider, useGameContext };
