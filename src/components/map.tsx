import generate from "../helpers/mapgenerator";
import styles from './map.module.css';

export default function Map({ gameMap }: { gameMap: string[][] }) {

    const processedMap = generate(gameMap);
    return (<>
        {processedMap.map((mapRow: string[]) => {
            return (<div className={ styles.mapRow }>
                {mapRow.map((elem: string) => {
                    return (
                        <div className={ styles.mapElem }>
                            {elem}
                        </div>
                    )
                })}
            </div>)
        })}
    </>);
}