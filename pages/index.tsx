import Map from 'src/components/map'

export default function Home() {
  const gameMap = [['.', '.', '.'], ['.', '*', '.'], ['.', '.', '*']];

  return (
    <div>
      <Map gameMap={gameMap} />
    </div>
  )
}
