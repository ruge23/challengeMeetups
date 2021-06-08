import { useCallback, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherByCity } from '../../redux/actions'
import { calculateBoxBeers } from '../../utils'

const useCalculateBeers = () => {
  const [totalPeople, setTotalPeople] = useState(null)
  const [totalBoxBeers, setTotalBoxBeers] = useState(null)
  const dispatch = useDispatch()

  const { weather, isFetching } = useSelector(
    (state) => state.calculateBeers,
  )
  
  const getWeather = useCallback(async (data) => {
    dispatch(getWeatherByCity(data.weatherCity))
    setTotalPeople(data.totalPublic)
  }, [dispatch])
  
  useEffect(() => {
    if (!weather) setTotalBoxBeers(calculateBoxBeers(weather,totalPeople))
  }, [weather, getWeather, totalPeople])

  return { weather, isFetching, getWeather, totalBoxBeers }

}
export { useCalculateBeers }