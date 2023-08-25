import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconProfile, IconSearch, IconSetting, IconSoundCloud, IconSpotify, IconTokopedia } from 'assets'
import { WARNA_CONTENT, WARNA_PUTIH } from '../../utils'

const Home = () => {
  return (
    <View style={{
      height: '55%',
      backgroundColor: '#e3f1ea'
    }}>
      <View style={{
        marginTop: 50
      }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 23
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 30
          }}>Let's Find a Job{"\n"}With Joobie</Text>
          <View style={{
            justifyContent: 'center'
          }}>
            <IconProfile />
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          marginTop: 15
        }}>
          <View style={{
            height: 45,
            width: '80%',
            backgroundColor: WARNA_PUTIH,
            borderRadius: 10,
            justifyContent: 'center'
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10
            }}>
              <IconSearch />
              <Text style={{
                color: WARNA_CONTENT,
                paddingLeft: 7,
                paddingTop: 1
              }}>Search Job</Text>
            </View>
          </View>

          <View style={{
            height: 45,
            width: '15%',
            backgroundColor: '#d2eede',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <IconSetting />
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          marginTop: 15
        }}>
          <View style={{
            height: 45,
            width: 90,
            backgroundColor: '#19bb67',
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: WARNA_PUTIH
            }}>All</Text>
          </View>

          <View style={{
            height: 45,
            width: 120,
            backgroundColor: WARNA_PUTIH,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: WARNA_CONTENT
            }}>Product Design</Text>
          </View>

          <View style={{
            height: 45,
            width: 90,
            backgroundColor: WARNA_PUTIH,
            borderRadius: 9,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: WARNA_CONTENT
            }}>Developer</Text>
          </View>
        </View>
        {/*  ------------------------------------------*/}
        <View style={{
          marginHorizontal: 24,
        }}>
          <View style={{
            width: '100%',
            height: '67%',
            backgroundColor: '#2c9463',
            borderRadius: 9,
            marginTop: 20
          }}>
            <View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 20
              }}>
                <View style={{
                  width: 50,
                  height: 50,
                  backgroundColor: WARNA_PUTIH,
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <IconTokopedia />
                </View>

                <View style={{
                  marginRight: 50,
                  marginTop: 5
                }}>
                  <Text style={{
                    color: WARNA_PUTIH,
                    fontWeight: 'bold',
                    fontSize: 16
                  }}>Tokopedia</Text>
                  <Text style={{
                    color: WARNA_PUTIH,
                    fontSize: 12
                  }}>Fulltime</Text>
                </View>

                <View style={{
                  backgroundColor: '#4a7062',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  height: 35,
                  marginTop: 10

                }}>
                  <Text style={{
                    paddingHorizontal: 10,
                    color: WARNA_PUTIH
                  }}>+14 Applied</Text>
                </View>
              </View>
            </View>

            <View style={{
              marginLeft: 13,
              marginTop: 10
            }}>
              <Text style={{
                color: WARNA_PUTIH,
                fontWeight: 'bold',
                fontSize: 23
              }}>Product Designer</Text>
              <Text style={{
                color: WARNA_PUTIH,
                fontSize: 12
              }}>Jakarta, Indonesia</Text>
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginTop: 20
            }}>
              <View style={{
                backgroundColor: WARNA_PUTIH,
                width: 90,
                height: 35,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontWeight: 'bold',
                }}>UI Designer</Text>
              </View>

              <View style={{
                backgroundColor: WARNA_PUTIH,
                width: 90,
                height: 35,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontWeight: 'bold',
                }}>Product</Text>
              </View>

              <View style={{
                backgroundColor: WARNA_PUTIH,
                width: 90,
                height: 35,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontWeight: 'bold',
                }}>Researcher</Text>
              </View>
            </View>
          </View>
        </View>
        {/* ------------------------------------------------------------------------------------------------------------------------------ */}



      </View>

      <View style={{
        marginHorizontal: 24,
        marginTop: 20
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>Popular Job</Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
        }}>
          <IconSpotify />
          <View style={{
            marginLeft: -20,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 16
            }}>Product Manager
            </Text>
            <Text style={{
              color: WARNA_CONTENT,
              fontSize: 11
            }}>Spotify Music Jakarta</Text>
          </View>
          <View style={{
            backgroundColor: '#ff742d',
            height: 35,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6
          }}>
            <Text style={{
              color: WARNA_PUTIH,
              fontSize: 12
            }}>
              Apply This Job
            </Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20
        }}>
          <IconSoundCloud />
          <View style={{
            marginLeft: -10,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 16
            }}>
              UI/UX Designer
            </Text>
            <Text style={{
              color: WARNA_CONTENT,
              fontSize: 11
            }}>Soundcloud Music Jakarta</Text>
          </View>
          <View style={{
            backgroundColor: '#ff742d',
            height: 35,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6
          }}>
            <Text style={{
              color: WARNA_PUTIH,
              fontSize: 12
            }}>
              Apply This Job
            </Text>
          </View>
        </View>
      </View>
    </View>


  )
}

export default Home

const styles = StyleSheet.create({})