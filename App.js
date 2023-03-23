import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { Home } from './screens'
import { COLORS, FONTS, icons, SIZES } from './constants'
// import { COLORS,FONTS,SIZES,icons } from '../constants'

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme,
    border:'transparent'
  }
}

const Stack=createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name='Home' component={Home} options={{
            title:'Shoe Selector',
            headerTintColor:COLORS.lightGray,
            headerTitleAlign:'center',
            headerTitleStyle:{
              ...FONTS.navTitle
            },
            headerLeft:({onPress})=>(
              <TouchableOpacity style={{
                marginLeft:SIZES.padding
              }}
              onPress={onPress}
              >
                <Image
                  source={icons.menu}
                  resizeMode='contain'
                  style={{
                    width:25,
                    height:25
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight:()=>(
              <TouchableOpacity style={{marginRight:SIZES.padding}}
              onPress={()=>console.log('Header right on pressed')}
              >
              <Image
                source={icons.search}
                resizeMode='contain'
                style={{
                  width:30,
                  height:30
                }}
              />

              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App