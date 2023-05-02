import MinesMap from "src/components/MinesMap";

export default function Home() {
  const gameMap = [
    ["*", ".", ".", "."],
    [".", ".", "*", "."],
    [".", ".", ".", "."],
  ];

  return (
    <div>
      <h3>Minesweeper map</h3>
      <MinesMap gameMap={gameMap} />
    </div>
  );
}
