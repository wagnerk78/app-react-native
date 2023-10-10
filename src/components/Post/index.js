/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import React from 'react';
import { Text, Box, Cover, Touchable, Spacer } from '../../components/index.js';
import Image from '../../image/cat.jpg';
import { colors } from '../../styles/theme.json';
import Icon from 'react-native-vector-icons/SimpleLineIcons.js';

const Post = () => {
    return (
        <Box hasPadding fluid>
            <Box row align="center">
                <Cover source={Image}
                    circle
                    width="50px"
                    height="50px"
                    border={`1px solid ${colors.light}`}
                />
                <Box spacing="0px 0px 0px 5px">
                    <Text bold color="dark">Wagner Kroiss</Text>
                    <Text variant="small">2 mins ago</Text>
                </Box>
                <Touchable width="80px" height="30px" align="flex-end">
                    <Icon name="options" size={15} color={colors.muted} />
                </Touchable>
            </Box>
            <Cover
                source={Image}
                width="100%"
                height="190px"
                spacing="10px 0px"
                radius="10px"
            />
            <Box row fluid align="center">
                <Box row fluid align="center">
                {Array.from(Array(3))?.map(item => (
                    <Cover source={Image}
                        circle
                        width="40px"
                        height="40px"
                        border={`1px solid ${colors.light}`}
                        spacing="0 -15px 0px 0px"
                    />
                ))}
                <Text spacing="0px 20px" variant="small" >Liked by 10,098</Text>
                </Box>
                <Box row justify="flex-end">
                    <Touchable width="24px" spacing="0px 15px 0px 0px">
                        <Icon name="heart" size={24} color={colors.muted} />
                    </Touchable>
                    <Touchable width="24px" spacing="0px 15px 0px 0px">
                        <Icon name="bubble" size={24} color={colors.muted} />
                    </Touchable>
                    <Touchable width="24px">
                        <Icon name="share" size={24} color={colors.muted} />
                    </Touchable>
                </Box>
            </Box>
            <Spacer />
            <Text small color="dark" >Interview: Shoe Designer John Fluevog On New Book, Spirituality And 'Slow Fashion'</Text>
        </Box>
    );
};

export default Post;