export const calculateBoxBeers = (weather, totalPeople) =>{
  let temp = Math.ceil(weather?.main.temp)
  let tempMax = weather?.main.temp_max
  let tempMin = weather?.main.temp_min
  let idx = null

  if(temp < 20 ){
    idx = 1
  }else if(temp>24){
    idx = 3
  }else idx = 0.75

  console.log('totalPeople * idx / 6', totalPeople * idx / 6)
  return Math.ceil((totalPeople * idx) / 6)
}