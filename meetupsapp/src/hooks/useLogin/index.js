import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions'

const useLogin = () => {
  const dispatch = useDispatch()

  const { username } = useSelector(
    (state) => state.app,
  )

  const getLogin = useCallback(async (data) => {
    dispatch(login(data))
  }, [dispatch])


  return { username, getLogin }
}
export { useLogin }