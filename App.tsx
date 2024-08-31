import { View, Text } from 'react-native'
import React from 'react'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import AxiosgetData from './components/AxiosgetData'
import AxiospostData from './components/AxiospostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
import ModelExample from './components/ModelExample'
import WeatherApp from './components/WeatherApp'


const App = ():React.JSX.Element => {
  
  return (
    <View>
      {/* <ProfileScreen/>  */}
      {/* <FlastListExample/> */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiospostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample/> */}
      <WeatherApp/>
    </View>
  )
}

export default App

