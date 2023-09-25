/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title, Box, Touchable } from '../../components/index.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles/theme.json';

const Header = ({ title }) => {
    return (
        <Box fluid height="70px" justify="center" border={`1px solid ${colors.muted}50`}>
            <SafeAreaView style={{
                flexDirection: 'row',
            }}>
                <Touchable width="80px" align="center" justify="center" onPress={() => alert('teste')}>
                    <Icon name="menu" size={30} />
                </Touchable>
                <Box justify="center" align="center">
                    <Title>{title}</Title>
                </Box>
                <Touchable width="80px" />
            </SafeAreaView>
        </Box>
    );
};

export default Header;