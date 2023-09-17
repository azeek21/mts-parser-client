import PageGenerator from "./components/PageGenerator";
import {useEffect, useState} from "react";
import TariffItem from "./components/TariffItem";
import TariffsService from "./API/TariffsService";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [tariffs, setTariffs] = useState([])

    const [lastUpdate, setLastUpdate] = useState({})

    const [disableButton, setButtonDisable] = useState(false)

    async function update() {
        setButtonDisable(true)
        const response = await TariffsService.update()
        const tariffResponse = await TariffsService.getTariffs(response.updateId)
        setTariffs(tariffResponse)
        setLastUpdate(response)
        setButtonDisable(false)
    }

    async function fetchLastUpdate() {
        const response = await TariffsService.getLastUpdate()
        setLastUpdate(response)
        const tariffResponse = await TariffsService.getTariffs(response.updateId)
        setTariffs(tariffResponse)
    }

    useEffect(
        () => {
            fetchLastUpdate()
        }, [])

    return (
        <div className="App">
            <h1>Тарифы {JSON.stringify(lastUpdate)}</h1>
            <MyButton disabled={disableButton} onClick={update}>Update</MyButton>
            {
                lastUpdate.updateId != null && tariffs.length > 0 ?
                    tariffs.map(tariff => <TariffItem props={tariff} key={tariff.id}/>)
                    :
                    <h2>Please update</h2>
            }
        </div>
    );
}

export default App;