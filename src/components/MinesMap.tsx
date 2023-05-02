import generate from "../helpers/mapgenerator";
import styles from "./MinesMap.module.css";

export default function MinesMap({ gameMap }: { gameMap: string[][] }) {
  const processedMap = generate(gameMap);

  return <>[map goes here]</>;
}
