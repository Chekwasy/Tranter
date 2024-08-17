import { View, Text, TextInput, FlatList, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors } from './../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function shops() {
    const [data, setData] = useState([
        { id: 1, shopname: 'Moto Hub', simageName: require(`./../../assets/images/shops/madu1.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo1.png`), street: 'No23 Bas st', city: 'Suru', state: 'Lagos, Nigeria', status: 'Verified', lastonline: 'Now', shopviews: '6077', shoplikes: '400', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 2, shopname: 'Provisions', simageName: require(`./../../assets/images/shops/madu2.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo2.png`), street: 'No76 Baahh st', city: 'Kasd', state: 'Nariobi, Kenya', status: 'Verified', lastonline: 'Now', shopviews: '6990', shoplikes: '744', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 3, shopname: 'Fruits and co', simageName: require(`./../../assets/images/shops/madu3.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo3.png`), street: 'No56 Ressd st', city: 'Kario', state: 'Lagos, Nigeria', status: ' Not Verified', lastonline: 'Now', shopviews: '7660', shoplikes: '3344', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 4, shopname: 'Grocery', simageName: require(`./../../assets/images/shops/madu4.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo4.png`), street: 'No33 Psas st', city: 'Jeuud', state: 'Lagos, Nigeria', status: 'Verified', lastonline: 'Now', shopviews: '2260', shoplikes: '474', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 5, shopname: 'Car Assessories', simageName: require(`./../../assets/images/shops/madu5.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo5.png`), street: 'No3 Oddes st', city: 'Sonny', state: 'Lagos, Nigeria', status: 'Verified', lastonline: 'Now', shopviews: '1160', shoplikes: '4234', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 6, shopname: 'Phones and Assec..', simageName: require(`./../../assets/images/shops/madu6.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo6.png`), street: 'No93 Pwerr st', city: 'Yare', state: 'Lagos, Nigeria', status: 'Verified', lastonline: 'Now', shopviews: '770', shoplikes: '4544', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 7, shopname: 'Food Stuffs', simageName: require(`./../../assets/images/shops/madu7.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo7.png`), street: 'No6 Grraeh st', city: 'Derra', state: 'Nariobi, Kenya', status: 'Verified', lastonline: 'Now', shopviews: '760', shoplikes: '1244', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 8, shopname: 'Electricals', simageName: require(`./../../assets/images/shops/madu8.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo8.png`), street: 'No765 Soohhh st', city: 'Uyytkk', state: 'Nariobi, Kenya', status: 'Not Verified', lastonline: 'Now', shopviews: '3360', shoplikes: '5644', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 9, shopname: 'Plumbing Items', simageName: require(`./../../assets/images/shops/madu9.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo9.png`), street: 'No76 Caatts st', city: 'Assuii', state: 'Nariobi, Kenya', status: 'Verified', lastonline: 'Now', shopviews: '60', shoplikes: '449', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 10, shopname: 'Clothings', simageName: require(`./../../assets/images/shops/madu10.png`), slogoimageName: require(`./../../assets/images/shoplogos/slogo10.png`), street: 'No098 Hytss st', city: 'Weerg', state: 'Nariobi, Kenya', status: 'Verified', lastonline: 'Now', shopviews: '6075', shoplikes: '3444', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
      ]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchPageData = async (page) => {
        // const response = await fetch();
        // const newData = await response.json();
        // setData([...data, ...newData]);
    };

    const keyExtractor = (item) => item.id.toString();


    const handleEndReached = () => {
        if (!loading) {
        // setLoading(true);
        // setPage(page + 1);
        // fetchPageData(page + 1);
        }
    };

  return (
    <View style={{
        width: '100%',
        height: '100%',
        paddingTop: 50,
        backgroundColor: Colors.madublue,
    }}>
        <View style={{
            height: '10%',
            position: 'static',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <View style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
            }}>
                <Image source={require('./../../assets/images/madukaonlineL.jpeg')} 
                style={{
                    width: '30%',
                    height: '30%',
                    padding: 15,
                }}
                />
                <View style={{
                    width: '40%',
                }}></View>
                <View style={{
                    width: '30%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        paddingBottom: 5,
                    }}>
                        <MaterialCommunityIcons name="account" size={24} color="white" />
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'outfit',
                            color: Colors.WHITE,
                            paddingLeft: 5,
                            fontSize: 18,
                        }}>Paul</Text>
                    </View>
                </View>
            </View>
            <View style={{
                width: '80%',
                height: '40%',
                backgroundColor: Colors.WHITE,
                borderRadius: 20,
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TextInput style={{
                    width: '45%',
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    textAlign: 'center',
                }} placeholder='Search For Product'/>
                <View style={{
                    width: '0.5%',
                    height: '80%',
                    backgroundColor: Colors.madublue,
                }}>
                    <Text>
                        |
                    </Text>
                </View>
                <TextInput style={{
                    width: '40%',
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20,
                    textAlign: 'center',
                }} placeholder='Search For Shop'/>
                <View style={{
                    width: '10%',
                    height: '95%',
                    backgroundColor: Colors.madublue,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Octicons name="search" size={24} color="white" />
                </View>
            </View>
        </View>
        <View style={{
            height: '83%',
            backgroundColor: Colors.Grey,
            borderRadius: 20,
        }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                <View style={{
                    height: 500,
                    width: '100%',
                    padding: 20,
                    borderWidth: 2,
                    backgroundColor: Colors.WHITE,
                    flexDirection: 'column',
                }}
                >
                    <View style={{
                        width: '100%',
                        height: '20%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: '60%',
                            height: '100%',
                            flexDirection: 'row',
                            borderRadius: 100,
                        }}>
                            <Image source={item.slogoimageName}
                                style={{
                                    width: '40%',
                                    height: '80%',
                                    resizeMode: 'contain',
                                    borderRadius: 100,
                                }}
                            />
                            <View style={{
                                width: '60%',
                                height: '100%',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontFamily: 'outfit-bold',
                                }}>{item.shopname}</Text>
                                <View style={{
                                    flexDirection: 'row',  
                                }}>
                                    <EvilIcons name="location" size={24} color="black" />
                                    <View>
                                        <Text style={{
                                            fontSize: 15,
                                            fontFamily: 'outfit',
                                        }}>{item.street}</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            fontFamily: 'outfit',
                                        }}>{item.city}</Text>
                                        <Text style={{
                                            fontSize: 11,
                                            fontFamily: 'outfit',
                                        }}>{item.state}</Text>
                                        <Text style={{
                                            paddingTop: 10,
                                            fontSize: 10,
                                            fontFamily: 'outfit',
                                            color: Colors.Grey,
                                        }}>Last Online {item.lastonline}</Text>
                                    </View>
                                </View>
                            </View>       
                        </View>
                        <View style={{
                            width: '40%',
                            height: '100%',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 13,
                                fontFamily: 'outfit',
                                backgroundColor: Colors.Verify,
                                borderRadius: 30,
                                padding: 5,
                            }}>{item.status}</Text>
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        height: '80%',
                    }}>
                        <Image source={item.simageName}
                            style={{
                                width: '100%',
                                height: '75%',
                                resizeMode: 'stretch',
                        }}
                        />
                        <View style={{
                            width: '100%',
                            height: '25%',
                            flexDirection: 'column',
                        }}>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginTop: -35,
                                paddingRight: 25,
                            }}>
                                <View style={{
                                    backgroundColor: Colors.WHITE,
                                    padding: 5,
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <FontAwesome6 name="rocketchat" size={24} color="black" />
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    width: '30%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontFamily: 'outfit-bold',
                                        padding: 5,
                                    }}>Shop Views</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        fontFamily: 'outfit',
                                    }}>{item.shopviews}</Text>
                                </View>
                                <View style={{
                                    width: '30%',
                                    alignItems: 'center',
                                    padding: 5,
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontFamily: 'outfit-bold',
                                        padding: 5,
                                        color: Colors.WHITE,
                                        backgroundColor: Colors.madublue,
                                        borderRadius: 30,
                                    }}>Visit Shop</Text>
                                </View>
                                <View style={{
                                    width: '30%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}>
                                    <View style={{
                                        padding: 2,
                                    }}><AntDesign name="like1" size={20} color="black" /></View>
                                    <Text style={{
                                        fontSize: 13,
                                        fontFamily: 'outfit',
                                        padding: 5
                                    }}>{item.shoplikes}</Text>
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                flexDirection: 'column',
                                borderTopWidth: 1,
                                borderTopColor: Colors.madublue,
                                paddingTop: 2,
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'outfit-bold',
                                    padding: 2,
                                }}>Shop Overview</Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'outfit',
                                    padding: 2,
                                }}>{item.shopoverview.substring(0, 100) + '...'}</Text>
                            </View>
                        </View>
                    </View>
                </View>)}
                initialNumToRender={10}
                keyExtractor={keyExtractor}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => loading ? <Text>Loading...</Text> : null}
            />
        </View>
      <View style={{
        height: '5%',
        display: 'flex',
        position: 'static',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
        <View style={styles.bottomTabs}>
        <FontAwesome name="list" size={26} color="white" />
        </View>
        <View style={styles.bottomTabs}>
        <MaterialCommunityIcons name="home-group" size={30} color="white" />
        </View>
        <View style={styles.bottomTabs}>
        <Entypo name="location" size={28} color="white" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bottomTabs: {
      width: '25%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtcolorWhite: {
        color: Colors.WHITE,
    }
  })