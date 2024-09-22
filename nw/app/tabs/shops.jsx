import { View, Text, Modal, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Touchable, SafeAreaView, KeyboardAvoidingView } from 'react-native'
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
    const loggedin = true;
    const [data, setData] = useState([
        { id: 1, shopname: 'Moto Hub', simageName: require('./../../assets/images/shops/madu1.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo1.png'), street: 'No23 Bas st', city: 'Suru', state: 'Lagos, Nigeria', status: true, lastonline: 'Now', shopviews: '6077', shoplikes: '400', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 2, shopname: 'Provisions', simageName: require('./../../assets/images/shops/madu2.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo2.png'), street: 'No76 Baahh st', city: 'Kasd', state: 'Nariobi, Kenya', status: true, lastonline: 'Now', shopviews: '6990', shoplikes: '744', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 3, shopname: 'Fruits and co', simageName: require('./../../assets/images/shops/madu3.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo3.png'), street: 'No56 Ressd st', city: 'Kario', state: 'Lagos, Nigeria', status: false, lastonline: 'Now', shopviews: '7660', shoplikes: '3344', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 4, shopname: 'Grocery', simageName: require('./../../assets/images/shops/madu4.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo4.png'), street: 'No33 Psas st', city: 'Jeuud', state: 'Lagos, Nigeria', status: true, lastonline: 'Now', shopviews: '2260', shoplikes: '474', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 5, shopname: 'Car Assessories', simageName: require('./../../assets/images/shops/madu5.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo5.png'), street: 'No3 Oddes st', city: 'Sonny', state: 'Lagos, Nigeria', status: false, lastonline: 'Now', shopviews: '1160', shoplikes: '4234', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 6, shopname: 'Phones and Assec..', simageName: require('./../../assets/images/shops/madu6.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo6.png'), street: 'No93 Pwerr st', city: 'Yare', state: 'Lagos, Nigeria', status: true, lastonline: 'Now', shopviews: '770', shoplikes: '4544', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 7, shopname: 'Food Stuffs', simageName: require('./../../assets/images/shops/madu7.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo7.png'), street: 'No6 Grraeh st', city: 'Derra', state: 'Nariobi, Kenya', status: true, lastonline: 'Now', shopviews: '760', shoplikes: '1244', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 8, shopname: 'Electricals', simageName: require('./../../assets/images/shops/madu8.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo8.png'), street: 'No765 Soohhh st', city: 'Uyytkk', state: 'Nariobi, Kenya', status: false, lastonline: 'Now', shopviews: '3360', shoplikes: '5644', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 9, shopname: 'Plumbing Items', simageName: require('./../../assets/images/shops/madu9.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo9.png'), street: 'No76 Caatts st', city: 'Assuii', state: 'Nariobi, Kenya', status: false, lastonline: 'Now', shopviews: '60', shoplikes: '449', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { id: 10, shopname: 'Clothings', simageName: require('./../../assets/images/shops/madu10.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo10.png'), street: 'No098 Hytss st', city: 'Weerg', state: 'Nariobi, Kenya', status: true, lastonline: 'Now', shopviews: '6075', shoplikes: '3444', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
      ]);
      const [msg, setMsg] = useState([
        {'21062024': [
            {simpleid: 1, userid: 'aaa', customerid: 'aaa', time: '03:35', message: 'Hello, how are you?'},
            {simpleid: 2, userid: 'bbb', customerid: 'bbb', time: '21:22', message: 'I am good, thanks!'},
        ], id: 1},
        {'22062024': [
            {simpleid: 3, userid: 'aaa', customerid: 'aaa', time: '05:44', message: 'What are you doing today?'},
            {simpleid: 4, userid: 'bbb', customerid: 'bbb', time: '14:05', message: 'I have a meeting at 2 PM.'}
        ], id: 2},
        {'23062024': [
            {simpleid: 5, userid: 'aaa', customerid: 'aaa', time: '08:15', message: 'Can we meet tomorrow?'},
            {simpleid: 6, userid: 'bbb', customerid: 'bbb', time: '18:30', message: 'Yes, what time?'}
        ], id: 3},
        {'24062024': [
            {simpleid: 7, userid: 'aaa', customerid: 'aaa', time: '09:00', message: 'How was your meeting?'},
            {simpleid: 8, userid: 'bbb', customerid: 'bbb', time: '11:45', message: 'It was good, thanks!'}
        ], id: 4},
        {'25062024': [
            {simpleid: 9, userid: 'aaa', customerid: 'aaa', time: '10:50', message: 'I am busy today. Exciting news! Our new project kicks off tomorrow! Ensure youve completed the onboarding process and reviewed the project scope.'},
            {simpleid: 10, userid: 'bbb', customerid: 'bbb', time: '13:20', message: 'Okay, talk to you later.'},
            {simpleid: 11, userid: 'aaa', customerid: 'aaa', time: '15:00', message: 'Bye!'},
            {simpleid: 12, userid: 'bbb', customerid: 'bbb', time: '16:40', message: 'Bye!'},
            {simpleid: 13, userid: 'aaa', customerid: 'aaa', time: '17:10', message: 'Hello again!'},
            {simpleid: 14, userid: 'bbb', customerid: 'bbb', time: '19:00', message: 'Hi!'},
            {simpleid: 15, userid: 'aaa', customerid: 'aaa', time: '20:30', message: 'What are you doing now?'},
            {simpleid: 16, userid: 'bbb', customerid: 'bbb', time: '21:50', message: 'Watching a movie.'},
            {simpleid: 17, userid: 'aaa', customerid: 'aaa', time: '22:10', message: 'Which movie?'},
            {simpleid: 18, userid: 'bbb', customerid: 'bbb', time: '22:30', message: 'The Shawshank Redemption.'},
            {simpleid: 19, userid: 'aaa', customerid: 'aaa', time: '22:50', message: 'I love that movie!'},
            {simpleid: 20, userid: 'bbb', customerid: 'bbb', time: '23:10', message: 'Me too!'},
            {simpleid: 21, userid: 'aaa', customerid: 'aaa', time: '23:30', message: 'Goodnight!'},
            {simpleid: 22, userid: 'bbb', customerid: 'bbb', time: '23:50', message: 'Goodnight!'},
            {simpleid: 23, userid: 'aaa', customerid: 'aaa', time: '00:10', message: 'Hello!'},
            {simpleid: 24, userid: 'bbb', customerid: 'bbb', time: '00:30', message: 'Hi!'},
        ], id: 5}
    ]);
    const [page, setPage] = useState(1);
    const [chatid, setChatid] = useState('kljhgfdfghj');
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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

    const toSetinvisible = (itm) => {
        setIsVisible(!isVisible);
        // const comp = evt.target.closest('Touchableopacity');
        setChatid(itm);
    };

  return (
    <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.madublue,
    }}>
        <View style={{
            height: '17%',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            backgroundColor: Colors.WHITE,
        }}>
            <View style={{
                width: '100%',
                height: '40%',
                flexDirection: 'row',
                backgroundColor: Colors.madublue,
            }}>
                <View style={{
                    width: '55%',
                    height: '80%',
                    justifyContent: 'center',
                }}>
                    <Image source={require('./../../assets/images/madukaonlineLtrim.jpeg')}
                    style={{
                        width: '80%',
                        height: '60%',
                        resizeMode: 'contain',  
                    }}
                    />
                </View>
                <View style={{
                    width: '40%',
                    height: '80%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {loggedin && (<View style={{
                        paddingBottom: 5,
                    }}>
                        <MaterialCommunityIcons name="account" size={24} color="white" />
                    </View>)}
                    {loggedin && (<View>
                        <Text style={{
                            fontFamily: 'outfit',
                            color: Colors.WHITE,
                            paddingLeft: 5,
                            fontSize: 18,
                        }}>Paul</Text>
                    </View>)}
                    {!loggedin && (
                        <View style={{
                            backgroundColor: Colors.WHITE,
                            borderRadius: 30,
                            padding: 5,
                            marginBottom: 5,
                        }}>
                            <Text style={{
                                fontSize: 13,
                                color: Colors.madublue,
                                fontFamily: 'outfit-bold',
                            }}>Sign Up / Sign In</Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={{
                width: '100%',
                height: '30%',
                alignItems: 'center',
                backgroundColor: Colors.madublue,
            }}>
                <View style={{
                    width: '80%',
                    height: '70%',
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
                    <Octicons name="search" size={16} color="white" />
                    </View>
                </View>
            </View>
        </View>
        <SafeAreaView style={{
            height: '78%',
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
                            {item.status && (<Text style={{
                                fontSize: 13,
                                fontFamily: 'outfit',
                                backgroundColor: Colors.Verify,
                                borderRadius: 30,
                                padding: 5,
                            }}>Verified</Text>)}
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
                                <TouchableOpacity onPress={() => toSetinvisible(item.id.toString())} 
                                style={{
                                    backgroundColor: Colors.WHITE,
                                    padding: 5,
                                    borderRadius: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <FontAwesome6 name="rocketchat" size={24} color="black" />
                                </TouchableOpacity>
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
        </SafeAreaView>
        { isVisible && (<Modal
        animationType='none'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}>
        <View
        style={{
            width: '100%',
            height: '100%',
            top: '30%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: Colors.madublue,
        }}>
            <View style={{
                width: '100%',
                height: '12%',
                backgroundColor: Colors.madublue,
                flexDirection: 'row',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
            }}>
                <View style={{
                    width: '35%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={data[parseInt(chatid) - 1].slogoimageName}
                        style={{
                            width: '45%',
                            height: '70%',
                            resizeMode: 'contain',
                            borderRadius: 100,
                        }}
                    />
                </View>
                <View style={{
                    width: '45%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: 'outfit-bold',
                        color: Colors.WHITE,
                    }}>{data[parseInt(chatid) - 1].shopname}</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: -2,
                    }}>
                        <View style={{
                            paddingRight: 5,
                        }}>
                            <EvilIcons name="location" size={16} color="white" />
                        </View>
                        <Text style={{
                            fontSize: 13,
                            fontFamily: 'outfit',
                            color: Colors.WHITE,
                        }}>{data[parseInt(chatid) - 1].street}</Text>
                    </View>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'outfit',
                        color: Colors.WHITE,
                    }}>{data[parseInt(chatid) - 1].city}</Text>
                    <Text style={{
                        paddingTop: 10,
                        fontSize: 10,
                        fontFamily: 'outfit',
                        color: Colors.WHITE,
                        paddingTop: 0,
                    }}>Last Online {data[parseInt(chatid) - 1].lastonline}</Text>
                </View>
                <View style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                        <AntDesign name="close" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: '47%',
                backgroundColor: Colors.lightgrey,   
            }}>
                <FlatList
                data={msg}
                renderItem={({ item }) => (
                    <View style={{
                        width: '100%',
                        height: 'auto',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: Colors.WHITE,
                            textAlign: 'center',
                            borderRadius: 20,
                            backgroundColor: Colors.madublue,
                            width: '20%',
                        }}>{`${Object.keys(item)[0].substring(0,2)}/${Object.keys(item)[0].substring(2,4)}/${Object.keys(item)[0].substring(4,8)}`}</Text>
                        <View>
                            <FlatList
                                data={Object.values(item)[0]}
                                renderItem={({ item }) => (
                                    <Text key={item.simpleid} style={{
                                        width: '100%',
                                        height: item.message.length < 200 ? 'auto' : 100,
                                    }}>{item.message}</Text>
                                )}
                                initialNumToRender={10}
                                keyExtractor={(item) => item.simpleid.toString()}
                            />
                        </View>
                    </View>
                )}
                initialNumToRender={10}
                keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <View style={{
                width: '100%',
                height: '11%',
                borderTopWidth: 1,
                borderColor: Colors.Grey,
                backgroundColor: Colors.lightgrey,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TextInput style={{
                    paddingLeft: 10,
                    width: '75%',
                    height: '25%',
                    fontSize: 16,
                    fontFamily: 'outfit',
                }} placeholder='Type a message...'/>
                <View style={{
                    width: '25%',
                    height: '60%',
                }}>
                    <Text style={{
                        width: '70%',
                        height: '90%',
                        fontSize: 15,
                        fontFamily: 'outfit-bold',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: Colors.WHITE,
                        backgroundColor: Colors.madublue,
                        borderRadius: 20,

                    }}>
                        Send
                    </Text>
                </View>
            </View>
        </View></Modal>)}
      <View style={{
        height: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
        <View style={styles.bottomTabs}>
            <FontAwesome name="list" size={26} color="white" />
        </View>
        <View style={styles.bottomTabs}>
            {loggedin && (<MaterialCommunityIcons name="home-group" size={30} color="white" />)}
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     },
    chatModal: {
        width: '80%',
        height: '70%',
        backgroundColor: Colors.madublue,
        borderRadius: 10,
        position: 'absolute',
        top: '20%',
        left: '10%',
    },
  })