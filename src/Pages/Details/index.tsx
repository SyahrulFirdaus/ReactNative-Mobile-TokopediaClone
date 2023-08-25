import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconChecklist, IconLeftArrow, IconSaving, IconTokopedia } from 'assets'
import { WARNA_CONTENT, WARNA_PUTIH } from '../../utils'

const Beranda = () => {
  return (
    <ScrollView>
      <View style={{
        flex: 1,
        backgroundColor: '#e3f1ea'
      }}>
        <View style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24
        }}>
          <IconLeftArrow />
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#0a0a0a'
          }}>Tokopedia</Text>
          <IconSaving />
        </View>

        <View style={{
          backgroundColor: WARNA_PUTIH,
          width: '100%',
          height: '100%',
          marginTop: 60,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40
        }}>

          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
              width: 60,
              height: 60,
              backgroundColor: '#d2ebce',
              borderRadius: 7,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 25,
              marginTop: 30
            }}>
              <IconTokopedia />
            </View>

            <View style={{
              marginTop: 25,
              marginLeft: 13
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#0a0a0a'
              }}>Product Designer</Text>
              <Text style={{
                color: WARNA_CONTENT,
                fontSize: 14
              }}>Tokopedia</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 35,
            marginTop: 15
          }}>
            <View>
              <Text style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#0a0a0a',
                textAlign: 'center'
              }}>Rp 12Jt</Text>
              <Text style={{
                color: WARNA_CONTENT,
                textAlign: 'center'
              }}>Salary</Text>
            </View>
            <View>
              <Text style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#0a0a0a',
                textAlign: 'center'
              }}>16</Text>
              <Text style={{
                color: WARNA_CONTENT,
                textAlign: 'center'
              }}>Applications</Text>
            </View>
            <View>
              <Text style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#0a0a0a',
                textAlign: 'center'
              }}>Onsite</Text>
              <Text style={{
                color: WARNA_CONTENT,
                textAlign: 'center'
              }}>Job Type</Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 24,
            marginTop: 15
          }}>
            <View style={{
              width: 100,
              height: 40,
              backgroundColor: '#fe712b',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Text style={{
                color: WARNA_PUTIH,
                fontWeight: 'bold'
              }}>Requirement</Text>
            </View>

            <View style={{
              width: 100,
              height: 40,
              backgroundColor: '#f7f7f7',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Text style={{
                color: '#908c8d',
                fontWeight: 'bold'
              }}>Company</Text>
            </View>

            <View style={{
              width: 100,
              height: 40,
              backgroundColor: '#f7f7f7',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Text style={{
                color: '#908c8d',
                fontWeight: 'bold'
              }}>Review</Text>
            </View>
          </View>

          <View style={{
            marginHorizontal: 24,
            marginTop: 15,
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              paddingBottom: 10,
              color: '#0a0a0a'
            }}>About The Role</Text>
            <Text style={{
              color: WARNA_CONTENT,
              fontSize: 12
            }}>
              They say no man is an islan and this holds particulary{"\n"}
              true of this role. As a Product Designer, you'll be part of the team that manages GoPay - Southeast Asia's largest{"\n"}
              payment application.
            </Text>
          </View>

          <View style={{
            marginLeft: 24,
            marginTop: 15
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 17,
              paddingBottom: 10,
              color: '#0a0a0a'
            }}>What You Will Do</Text>
            <View style={{
              flexDirection: 'row',
            }}>
              <View style={{
                width: 26,
                height: 26,
                backgroundColor: '#d4f0e5',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <IconChecklist />
              </View>

              <Text style={{
                color: WARNA_CONTENT,
                fontSize: 12,
                paddingLeft: 10,
                paddingTop: 5
              }}>Expert in UI/UX Experience</Text>
            </View>

            <View style={{
              flexDirection: 'row',
              marginTop: 5
            }}>
              <View style={{
                width: 26,
                height: 26,
                backgroundColor: '#d4f0e5',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <IconChecklist />
              </View>

              <Text style={{
                color: WARNA_CONTENT,
                fontSize: 12,
                paddingLeft: 10,
                paddingTop: 5
              }}>Expert in Project Manager</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              marginTop: 5
            }}>
              <View style={{
                width: 26,
                height: 26,
                backgroundColor: '#d4f0e5',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <IconChecklist />
              </View>

              <Text style={{
                color: WARNA_CONTENT,
                fontSize: 12,
                paddingLeft: 10,
                paddingTop: 5
              }}>Define the Product Brief</Text>
            </View>


          </View>
          <View style={{
            marginHorizontal: 20,
            marginTop: 20
          }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#53c06e',
              width: '100%',
              height: 50,
              borderRadius: 10,
              marginBottom: 15
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: WARNA_PUTIH
              }}>Apply This Job</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Beranda
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({})