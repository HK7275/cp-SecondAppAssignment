import React from 'react';
import { Text, View, Image } from 'react-native';

const styles = {
    parentView: {
        flex: 1,
        justifyContent: 'space-between' as 'space-between',
        flexDirection: 'row' as 'row',
        margin: 5,
    },
    image: { width: 75, height: 125 },
    childView: {
        flex: 1,
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between' as 'space-between',
        paddingTop: 1,
        paddingBottom: 10,
        paddingLeft: 5
    },
    title: {
        fontSize: 15,
        paddingLeft: 3
    },
}

const Bold = ({
    children,
    style = {}
}: { children: string | React.ReactChildren, style?: any }) => (
    <Text style={{ fontWeight: 'bold', ...style }}>
        {children}
    </Text>
);

const Item = (props: any) => {
    const {
        title,
        image,
        cast,
        overview
    } = props;
    return (
        <View style={styles.parentView}>
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
            <View style={styles.childView}>
                <Bold style={styles.title}>{title}</Bold>
                <Text>
                    <Bold> Cast: </Bold>
                    {cast}.
                </Text>
                <Text>
                    {overview.length > 140 ? `${overview.slice(0,150)}..` : overview}
                </Text>
            </View>
        </View >
    );
};

export default Item;
