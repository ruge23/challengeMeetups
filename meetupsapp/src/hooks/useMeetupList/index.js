import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherByLatLng } from '../../redux/actions'

const useMeetupList = () => {
  const dispatch = useDispatch()

  const { weatherLatLng, isFetching } = useSelector(
    (state) => state.meetupList,
  )

  const getWeather = useCallback(async (lat,lng) => {
    dispatch(getWeatherByLatLng(lat, lng))
  }, [dispatch])

  return { weatherLatLng, isFetching, getWeather }

}
export { useMeetupList }