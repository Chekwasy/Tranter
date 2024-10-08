import { View, Text, Modal, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, SafeAreaView} from 'react-native'
import { Video } from 'expo-av' 
import React, { useState, useRef } from 'react'
import { Colors } from './../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


export default function shops() {
    const loggedin = true;
    const [data, setData] = useState([
        { shopid: 'aaa', shopname: 'Moto Hub', phonenumber: '4645655551', regdate: '22 Jan 2022', simageName: require('./../../assets/images/shops/madu1.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo1.png'), street: 'No23 Bas st', city: 'Suru', state: 'Lagos, Nigeria', status: true, lastonline: 'Now', shopviews: '6077', shoplikes: '400', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'bbb', shopname: 'Provisions', phonenumber: '4645788551', regdate: '02 Jan 2022', simageName: require('./../../assets/images/shops/madu2.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo2.png'), street: 'No76 Baahh st', city: 'Kasd', state: 'Nariobi, Kenya', status: true, lastonline: 'Now', shopviews: '6990', shoplikes: '744', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'ccc', shopname: 'Fruits and co', phonenumber: '752225551', regdate: '22 Mar 2022', simageName: require('./../../assets/images/shops/madu3.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo3.png'), street: 'No56 Ressd st', city: 'Kario', state: 'Lagos, Nigeria', status: false, lastonline: 'Now', shopviews: '7660', shoplikes: '3344', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'ddd', shopname: 'Grocery', phonenumber: '4774125551', regdate: '22 Apr 2022', simageName: require('./../../assets/images/shops/madu4.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo4.png'), street: 'No33 Psas st', city: 'Jeuud', state: 'Lagos, Nigeria', status: true, lastonline: 'Now', shopviews: '2260', shoplikes: '474', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'eee', shopname: 'Car Assessories', phonenumber: '46489962544', regdate: '22 Feb 2022', simageName: require('./../../assets/images/shops/madu5.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo5.png'), street: 'No3 Oddes st', city: 'Sonny', state: 'Lagos, Nigeria', status: false, lastonline: 'Now', shopviews: '1160', shoplikes: '4234', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'fff', shopname: 'Phones and Assec..', phonenumber: '9899963251', regdate: '22 May 2022', simageName: require('./../../assets/images/shops/madu6.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo6.png'), street: 'No93 Pwerr st', city: 'Yare', state: 'Lagos, Nigeria', status: true, lastonline: 'Now', shopviews: '770', shoplikes: '4544', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'ggg', shopname: 'Food Stuffs', phonenumber: '48896544551', regdate: '22 Jun 2022', simageName: require('./../../assets/images/shops/madu7.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo7.png'), street: 'No6 Grraeh st', city: 'Derra', state: 'Nariobi, Kenya', status: true, lastonline: 'Now', shopviews: '760', shoplikes: '1244', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'hhh', shopname: 'Electricals', phonenumber: '4458885541', regdate: '22 Jul 2023', simageName: require('./../../assets/images/shops/madu8.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo8.png'), street: 'No765 Soohhh st', city: 'Uyytkk', state: 'Nariobi, Kenya', status: false, lastonline: 'Now', shopviews: '3360', shoplikes: '5644', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'iii', shopname: 'Plumbing Items', phonenumber: '23665888991', regdate: '21 Sept 2022', simageName: require('./../../assets/images/shops/madu9.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo9.png'), street: 'No76 Caatts st', city: 'Assuii', state: 'Nariobi, Kenya', status: false, lastonline: 'Now', shopviews: '60', shoplikes: '449', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
        { shopid: 'jjj', shopname: 'Clothings', phonenumber: '87889655222', regdate: '20 Dec 2020', simageName: require('./../../assets/images/shops/madu10.png'), slogoimageName: require('./../../assets/images/shoplogos/slogo10.png'), street: 'No098 Hytss st', city: 'Weerg', state: 'Nariobi, Kenya', status: true, lastonline: 'Now', shopviews: '6075', shoplikes: '3444', shopoverview: `We're a [type of store, e.g. boutique, convenience store, etc.] offering a curated selection of [products/categories]. Our mission is to provide [unique value proposition, e.g. exceptional customer service, high-quality products, etc.].`,},
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
            {simpleid: 22, userid: 'bbb', customerid: 'bbb', time: '23:50', message: 'Goodnight! '},
            {simpleid: 23, userid: 'aaa', customerid: 'aaa', time: '00:10', message: `Hello! Here is the longest sentence I can generate:


"This is an extraordinarily, remarkably, and unbelievably long sentence that explores the vast expanse of human existence, delving deeply into emotions, relationships, and the intricate complexities of life, where past and present intersect, shaping our perceptions and understanding of identity, purpose, and connection, as we navigate the challenges of an ever-changing world, where technological advancements and cultural shifts continually reshape our realities, forcing us to adapt and evolve, while holding onto cherished memories and traditions, all amidst life's unpredictable journey, filled with twists and turns, moments of joy and sorrow, growth and self-discovery, as we strive to find balance, meaning, and fulfillment, and seek to understand the mysteries of the universe, from the smallest subatomic particles to the vast expanses of cosmic space, and everything in between, including the intricate dance of atoms and molecules, the beauty of art and music, the complexity of language and thought, the majesty of nature and its wonders, the depths of human emotion and the heights of human achievement, and the endless possibilities that lie beyond the boundaries of our current understanding, waiting to be discovered, explored, and comprehended, in a never-ending quest for knowledge, wisdom, and enlightenment.

(19,914 characters)
Note: This sentence is generated using a combination of natural language processing and algorithmic techniques to create a coherent and grammatically correct sentence.
Would you like me to generate another one?`},
            {simpleid: 24, userid: 'bbb', customerid: 'bbb', time: '00:30', message: 'Hi!'},
        ], id: 5}
    ]);

    const [pics, setPics] = useState([
        {id: 1, shopid: 'aaa', userid: 'aaa', pic_name: 'Chair', price: '15000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_1.jpg'), vid: require('./../../assets/videos/shop_aaa/aaa_v1.mp4'), updated: '02 Jan 2024'},
        {id: 2, shopid: 'aaa', userid: 'aaa', pic_name: 'Book', price: '30000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_2.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v2.mp4'), updated: '05 Jan 2024'},
        {id: 3, shopid: 'aaa', userid: 'aaa', pic_name: 'Bag', price: '31000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_3.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v3.mp4'), updated: '05 Feb 2024'},
        {id: 4, shopid: 'aaa', userid: 'aaa', pic_name: 'Table', price: '149000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_4.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v4.mp4'), updated: '17 Mar 2024'},
        {id: 5, shopid: 'aaa', userid: 'aaa', pic_name: 'Pot', price: '30000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_5.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v5.mp4'), updated: '22 Jan 2023'},
        {id: 6, shopid: 'aaa', userid: 'aaa', pic_name: 'Pressure Cooker', price: '20000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_6.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v6.mp4'), updated: '13 May 2024'},
        {id: 7, shopid: 'aaa', userid: 'aaa', pic_name: 'Fan', price: '17000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_7.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v7.mp4'), updated: '15 Apr 2024'},
        {id: 8, shopid: 'aaa', userid: 'aaa', pic_name: 'Door', price: '3500000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_8.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v8.mp4'), updated: '09 Jun 2024'},
        {id: 9, shopid: 'aaa', userid: 'aaa', pic_name: 'Bulb', price: '1600', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_9.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v9.mp4'), updated: '04 Jul 2024'},
        {id: 10, shopid: 'aaa', userid: 'aaa', pic_name: 'Touch', price: '3000', currency: 'KES', pic: require('./../../assets/images/shop_aaa/aaa_10.png'), vid: require('./../../assets/videos/shop_aaa/aaa_v10.mp4'), updated: '24 Aug 2024'},
    ])

    const closeShowshop = () => {
        setShowshop(!showshop);
        setShoptab('pic');
    };

    const [page, setPage] = useState(1);
    const [shoptab, setShoptab] = useState('pic');
    const [shopdict, setShopdict] = useState({});
    const [usrdict, setUsrdict] = useState({userid: 'aaaa', shopliked: ['bbb', 'ccc']});
    const [loading, setLoading] = useState(false);
    const [usrid, setUsrid] = useState('aaa'); //got from authuntication
    const [isVisible, setIsVisible] = useState(false);
    const [showshop, setShowshop] = useState(false);

    const fetchPageData = async (page) => {
        // const response = await fetch();
        // const newData = await response.json();
        // setData([...data, ...newData]);
    };


    const handleEndReached = () => {
        if (!loading) {
        // setLoading(true);
        // setPage(page + 1);
        // fetchPageData(page + 1);
        }
    };

    const toSelectedShop = (shpid, arr) => {
        setShowshop(!showshop);
        const len = arr.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                if (arr[i].shopid === shpid) {
                    setShopdict(arr[i]);
                }
            }
        }
    };

    const toSetinvisible = (itm, arr) => {
        setIsVisible(!isVisible);
        // const comp = evt.target.closest('Touchableopacity');
        const len = arr.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                if (arr[i].shopid === itm) {
                    setShopdict(arr[i]);
                }
            }
        }
    };
 
  return (
    <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.madublue,
    }}>
        {(shoptab !== 'msg') && (<View style={{
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
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                borderRadius: 30,
                                padding: 5,
                                backgroundColor: Colors.WHITE,
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
        </View>)}
        {(shoptab === 'msg') && (<View style={{
            height: '17%',
            backgroundColor: Colors.WHITE,
        }}>
        </View>)}
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
                                <TouchableOpacity onPress={() => toSetinvisible(item.shopid, data)} 
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
                                    <TouchableOpacity onPress={() => toSelectedShop(item.shopid, data)}
                                    style={{
                                        backgroundColor: Colors.madublue,
                                        borderRadius: 30,
                                    }}><Text style={{
                                        fontSize: 15,
                                        fontFamily: 'outfit-bold',
                                        padding: 5,
                                        color: Colors.WHITE,
                                    }}>Visit Shop</Text></TouchableOpacity>
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
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                keyExtractor={(item) => item.shopid}
                ListFooterComponent={() => loading ? <Text>Loading...</Text> : null}
            />
        </SafeAreaView>
        { isVisible && (<Modal
        animationType='none'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(!isVisible)}>
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
                    <Image source={shopdict.slogoimageName}
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
                    }}>{shopdict.shopname}</Text>
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
                        }}>{shopdict.street}</Text>
                    </View>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'outfit',
                        color: Colors.WHITE,
                    }}>{shopdict.city}</Text>
                    <Text style={{
                        paddingTop: 10,
                        fontSize: 10,
                        fontFamily: 'outfit',
                        color: Colors.WHITE,
                        paddingTop: 0,
                    }}>Last Online {shopdict.lastonline}</Text>
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
                        <View style={{
                            paddingTop: 5,
                            width: '100%',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                color: Colors.WHITE,
                                textAlign: 'center',
                                borderRadius: 20,
                                backgroundColor: Colors.madublue,
                                width: '20%',
                            }}>{`${Object.keys(item)[0].substring(0,2)}/${Object.keys(item)[0].substring(2,4)}/${Object.keys(item)[0].substring(4,8)}`}</Text>
                        </View>
                        <View style={{width: '100%'}}>
                            <FlatList
                                data={Object.values(item)[0]}
                                renderItem={({ item }) => (
                                    <View style={{
                                        width: '100%',
                                        paddingTop: 10,
                                        paddingBottom: 5,
                                        alignItems: item.userid === usrid ? 'flex-start' : 'flex-end',
                                        paddingLeft: item.userid === usrid ? 10 : 0,
                                        paddingRight: item.userid === usrid ? 0 : 10,
                                    }}>
                                        <Text key={item.simpleid} style={{
                                            flexWrap: 'wrap',
                                            width: '80%',
                                            borderTopRightRadius: item.userid === usrid ? 30 : 0,
                                            borderBottomRightRadius: item.userid === usrid ? 30 : 0,
                                            borderTopLeftRadius: item.userid === usrid ? 0 : 30,
                                            borderBottomLeftRadius: item.userid === usrid ? 0 : 30,
                                            height: item.message.length < 60 ? 30 : (item.message.length / 69) * 20,
                                            backgroundColor: item.userid === usrid ? Colors.madublue : Colors.Grey,
                                            color: item.userid === usrid ? Colors.WHITE : Colors.WHITE,
                                            textAlign: item.userid === usrid ? 'left' : 'right',
                                        }}>{item.message}</Text>
                                        <View>
                                            <Text>
                                                {item.time}
                                            </Text>
                                        </View>
                                    </View>
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
        { showshop && (<Modal
        animationType='none'
        transparent={true}
        visible={showshop}
        onRequestClose={() => closeShowshop()}>
            <View style={{ 
                width: '100%',
                height: '100%',
                backgroundColor: Colors.lightgrey,
            }}>
                <View style={{
                    width: '100%',
                    height: '6%',
                }}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                        backgroundColor: Colors.madublue,
                    }}>
                        <View style={{
                            width: '55%',
                            height: '100%',
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
                            height: '100%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {loggedin && (<View style={{
                                paddingBottom: 5,
                                height: '60%',
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
                </View>
                <View style={{
                    width: '100%',
                    height: '5%',
                    backgroundColor: Colors.WHITE,
                    borderTopWidth: 3,
                    borderTopColor: Colors.lightgrey,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}>
                    <TouchableOpacity onPress={() => setShoptab('pic')} style={{
                        width: '20%',
                        height: '80%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 4,
                        borderBottomColor: shoptab === 'pic' ? Colors.purple : Colors.WHITE,
                    }}>
                        <AntDesign name="picture" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShoptab('vid')} style={{
                        width: '20%',
                        height: '80%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 4,
                        borderBottomColor: shoptab === 'vid' ? Colors.purple : Colors.WHITE,
                    }}>
                        <MaterialIcons name="video-collection" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShoptab('msg')} style={{
                        width: '20%',
                        height: '80%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 4,
                        borderBottomColor: shoptab === 'msg' ? Colors.purple : Colors.WHITE,
                    }}>
                        <MaterialCommunityIcons name="message" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{
                        width: '20%',
                        height: '80%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: 4,
                        borderBottomColor: shoptab === 'post' ? Colors.purple : Colors.WHITE,
                    }}>
                        <MaterialIcons name="add-home" size={24} color="black" />
                    </View>
                </View>
                {/* After icons row */}
                {(shoptab !== 'msg') && (<View style={{
                    width: '100%',
                    height: '20%',
                    backgroundColor: Colors.WHITE,
                    borderTopWidth: 3,
                    flexDirection: 'row',
                    borderTopColor: Colors.lightgrey,
                    borderBottomWidth: 3,
                    borderBottomColor: Colors.lightgrey,
                }}>
                    <View style={{
                        width: '75%',
                        height: '100%',
                        alignItems: 'center'
                    }}
                    >
                        <View style={{
                            width: '90%',
                            height: '30%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}>
                            <Image source={shopdict.slogoimageName}
                                style={{
                                    width: '25%',
                                    height: '75%',
                                    resizeMode: 'contain',
                            }}/>
                            <View style={{
                                width: '70%',
                                height: '70%',
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'outfit-bold',
                                }}>{shopdict.shopname}</Text>
                                <View style={{
                                    flexDirection: 'row',  
                                }}>
                                    <EvilIcons name="location" size={10} color="black" />
                                    <View>
                                        <Text style={{
                                            fontSize: 10,
                                            fontFamily: 'outfit',
                                        }}>{`${shopdict.street}, ${shopdict.city}`} </Text>
                                        <Text style={{
                                            fontSize: 8,
                                            fontFamily: 'outfit',
                                        }}>{shopdict.state}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Discription */}
                        <View style={{
                            width: '80%',
                            height: '70%',
                            justifyContent: 'space-evenly',
                        }}>
                            <Text style={{
                                fontFamily: 'outfit-bold',
                                fontSize: 11,
                            }}>Overview</Text>
                            <Text style={{
                                fontFamily: 'outfit',
                                fontSize: 10,
                            }}>{shopdict.shopoverview}</Text>
                            <Text style={{
                                fontFamily: 'outfit',
                                fontSize: 9,
                                borderWidth: 1,
                                borderRadius: 20,
                                borderColor: Colors.madublue,
                                width: '20%',
                                textAlignVertical: 'center',
                                textAlign: 'center',
                            }}>Verified</Text>
                            <View style={{
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-evenly',
                            }}>
                                <View style={{width: '5%'}}><Feather name="phone" size={10} color="black" /></View>
                                <Text style={{
                                    fontFamily: 'outfit',
                                    fontSize: 11,
                                    width: '90%',
                                }}>{shopdict.phonenumber}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: '25%',
                        height: '100%',
                        justifyContent: 'space-evenly',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '20%',
                        }}>
                            <Text style={{
                                fontFamily: 'outfit-bold',
                                fontSize: 11,
                            }}>Since:</Text>
                            <Text>{shopdict.regdate}</Text>
                        </View>
                        <View style={{
                            width: '100%',
                            height: '20%',
                        }}>
                            <Text style={{
                                fontFamily: 'outfit-bold',
                                fontSize: 11,
                            }}>Shop views:</Text>
                            <Text>{shopdict.shopviews}</Text>
                        </View>
                        <View style={{
                            width: '100%',
                            height: '20%',
                        }}>
                            <Text style={{
                                fontFamily: 'outfit-bold',
                                fontSize: 11,
                            }}>Shop likes:</Text>
                            <Text>{shopdict.shoplikes}</Text>
                        </View>
                        <View style={{
                            width: '100%',
                            height: '20%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}>
                            {usrdict.shopliked.includes(shopdict.shopid) && <View style={{width: '45%'}}><AntDesign name="like1" size={18} color="black" /></View>}
                            {!usrdict.shopliked.includes(shopdict.shopid) && <View style={{width: '45%'}}><AntDesign name="like2" size={18} color="black" /></View>}
                            <View style={{width: '45%'}}><MaterialCommunityIcons name="book-edit-outline" size={18} color="black" /></View>
                        </View>
                    </View>
                </View>)}
                {/* pics and vids change */}
                {(shoptab === 'pic') && (<View style={{
                    width: '100%',
                    height: '70%',
                    backgroundColor: Colors.WHITE,
                }}>
                    <FlatList
                    data={pics}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={{
                            width: '50%',
                            height: 200,
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                        }}>
                            <Image source={item.pic}
                                style={{
                                    width: '80%',
                                    height: '50%',
                                    resizeMode: 'contain',
                            }}/>
                            <View style={{
                                width: '80%',
                                height: '30%',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }}>
                                <View style={{
                                    width: '100%',
                                    height: '40%',
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        width: '70%',
                                        fontFamily: 'outfit',
                                        fontSize: 12,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                    }}>
                                        {item.pic_name}
                                    </Text>
                                    <Text style= {{
                                        fontFamily: 'outfit',
                                        fontSize: 12,
                                        width: '30%',
                                        textAlign: 'center',
                                        backgroundColor: Colors.madublue,
                                        borderRadius: 20,
                                        color: Colors.WHITE,
                                        textAlignVertical: 'center',
                                    }}>
                                        View
                                    </Text>
                                </View>
                                <View style={{
                                    width: '100%',
                                    height: '40%',
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        fontFamily: 'outfit',
                                        fontSize: 12,
                                        width: '70%',
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                    }}>{`${item.currency} ${item.price}`}</Text>
                                    <Text style={{
                                        width: '30%',
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        backgroundColor: Colors.lightgrey,
                                        borderRadius: 20,
                                        fontFamily: 'outfit',
                                        fontSize: 9,
                                    }}>{item.updated}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    initialNumToRender={10}
                    keyExtractor={(item) => item.id.toString()}
                    />
                </View>)}
                {/* Video show */}
                {(shoptab === 'vid') && (<View style={{
                    width: '100%',
                    height: '70%',
                    backgroundColor: Colors.WHITE,
                }}>
                    <FlatList
                    data={pics}
                    renderItem={({ item }) => (
                        <View style={{
                            width: '100%',
                            height: 400,
                            alignItems: 'center',
                            borderTopWidth: 3,
                            borderTopColor: Colors.madublue,
                            justifyContent: 'space-evenly',
                        }}>
                            <Video 
                                source={item.vid}
                                useNativeControls
                                resizeMode='contain'
                                style={{
                                    width: '100%',
                                    height: '70%',
                            }}/>
                            <View style={{
                                width: '100%',
                                height: '20%',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }}>
                                <View style={{
                                    width: '100%',
                                    height: '30%',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{width: '50%', height: '100%', alignItems: 'center',}}>
                                        <Text style={{
                                            width: '50%',
                                            height: '100%',
                                            backgroundColor: Colors.lightgrey,
                                            borderRadius: 20,
                                            fontFamily: 'outfit',
                                            fontSize: 12,
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                        }}>
                                            {item.pic_name}
                                        </Text>
                                    </View>
                                    <View style={{width: '50%', height: '100%', alignItems: 'center',}}>
                                        <Text style= {{
                                            fontFamily: 'outfit',
                                            fontSize: 12,
                                            width: '50%',
                                            height: '100%',
                                            textAlign: 'center',
                                            backgroundColor: Colors.madublue,
                                            borderRadius: 20,
                                            color: Colors.WHITE,
                                            textAlignVertical: 'center',
                                        }}>
                                            View
                                        </Text>
                                    </View>
                                </View>
                                <View style={{
                                    width: '100%',
                                    height: '30%',
                                    flexDirection: 'row',
                                }}>
                                    <View style={{width: '50%', height: '100%', alignItems: 'center',}}>
                                        <Text style={{
                                            fontFamily: 'outfit',
                                            fontSize: 12,
                                            width: '50%',
                                            height: '100%',
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                        }}>{`${item.currency} ${item.price}`}</Text>
                                    </View>
                                    <View style={{width: '50%', height: '100%', alignItems: 'center',}}>
                                        <Text style={{
                                            width: '50%',
                                            height: '100%',
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                            backgroundColor: Colors.lightgrey,
                                            borderRadius: 20,
                                            fontFamily: 'outfit',
                                            fontSize: 9,
                                        }}>{item.updated}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    initialNumToRender={10}
                    keyExtractor={(item) => item.id.toString()}
                    />
                </View>)}
                {/* message show */}
                {(shoptab === 'msg') && (
                    <View style={{
                        width: '100%',
                        height: '90%',
                    }}>
                        <View style={{
                            width: '100%',
                            height: '85%',
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
                                    <View style={{
                                        paddingTop: 5,
                                        width: '100%',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{
                                            color: Colors.WHITE,
                                            textAlign: 'center',
                                            borderRadius: 20,
                                            backgroundColor: Colors.madublue,
                                            width: '20%',
                                        }}>{`${Object.keys(item)[0].substring(0,2)}/${Object.keys(item)[0].substring(2,4)}/${Object.keys(item)[0].substring(4,8)}`}</Text>
                                    </View>
                                    <View style={{width: '100%'}}>
                                        <FlatList
                                            data={Object.values(item)[0]}
                                            renderItem={({ item }) => (
                                                <View style={{
                                                    width: '100%',
                                                    paddingTop: 10,
                                                    paddingBottom: 5,
                                                    alignItems: item.userid === usrid ? 'flex-start' : 'flex-end',
                                                    paddingLeft: item.userid === usrid ? 10 : 0,
                                                    paddingRight: item.userid === usrid ? 0 : 10,
                                                }}>
                                                    <Text key={item.simpleid} style={{
                                                        flexWrap: 'wrap',
                                                        width: '80%',
                                                        borderTopRightRadius: item.userid === usrid ? 30 : 0,
                                                        borderBottomRightRadius: item.userid === usrid ? 30 : 0,
                                                        borderTopLeftRadius: item.userid === usrid ? 0 : 30,
                                                        borderBottomLeftRadius: item.userid === usrid ? 0 : 30,
                                                        height: item.message.length < 60 ? 30 : (item.message.length / 69) * 20,
                                                        backgroundColor: item.userid === usrid ? Colors.madublue : Colors.Grey,
                                                        color: item.userid === usrid ? Colors.WHITE : Colors.WHITE,
                                                        textAlign: item.userid === usrid ? 'left' : 'right',
                                                    }}>{item.message}</Text>
                                                    <View>
                                                        <Text>
                                                            {item.time}
                                                        </Text>
                                                    </View>
                                                </View>
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
                            height: '15%',
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
                    </View>
                )}
            </View>
        </Modal>)}
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