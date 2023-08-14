import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { View, Text, Image,  StyleSheet, Dimensions } from 'react-native';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function ProductList() {
    const paperStyle = {padding: '50px 20px', width: 600, margin: "20px auto"}
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8090/api/product")
            .then(res => res.json())
            .then((result) => {
                    setProducts(result);
                }
            )
    }, [])
    const Tutorial = props => {
        return (
            <View style={styles.wrapper}>

                {/* Table Container */}
                <View style={styles.table}>
                    {/* Table Head */}
                    <View style={styles.table_head}>
                        <View style={{width: '15%'}}>
                            <Text style={styles.table_head_captions}>Sr. No</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_head_captions}>Month</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_head_captions}>Earnings</Text>
                        </View>
                    </View>

                    {/* Table Body - Single Row */}
                    <View style={styles.table_body_single_row}>
                        <View style={{width: '15%'}}>
                            <Text style={styles.table_data}>01</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>January</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>$10,236</Text>
                        </View>
                    </View>

                    {/* Table Body - Single Row */}
                    <View style={styles.table_body_single_row}>
                        <View style={{width: '15%'}}>
                            <Text style={styles.table_data}>02</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>February</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>$9,236</Text>
                        </View>
                    </View>

                    {/* Table Body - Single Row */}
                    <View style={styles.table_body_single_row}>
                        <View style={{width: '15%'}}>
                            <Text style={styles.table_data}>03</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>March</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>$7,236</Text>
                        </View>
                    </View>

                    {/* Table Body - Single Row */}
                    <View style={styles.table_body_single_row}>
                        <View style={{width: '15%'}}>
                            <Text style={styles.table_data}>04</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>April</Text>
                        </View>
                        <View style={{width: '45%'}}>
                            <Text style={styles.table_data}>$19,236</Text>
                        </View>
                    </View>
                </View>


            </View>
        );
    };


    const styles = StyleSheet.create({
        wrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
        table_head: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#ddd',
            padding: 7,
            backgroundColor: '#3bcd6b'
        },
        table_head_captions: {
            fontSize: 15,
            color: 'white'
        },

        table_body_single_row: {
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#ddd',
            padding: 7,
        },
        table_data: {
            fontSize: 11,
        },
        table: {
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 1,
            backgroundColor: '#fff',
        },

    });
}

    export default Tutorial;