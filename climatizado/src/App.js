import {useFetch}  from './Hooks/useFetch'
import {WeatherInterface} from './Components/WeatherInterface'

function App() {
  const {data, isLoading} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=Barranquilla&appid=bbba429e9f1cc3cd79fa16b38ea8b050`)

  if(isLoading) return <>Loading</>
  return (
    <div className='container'>
      <WeatherInterface weatherData={data}/>
    </div>
  );
}

export default App;