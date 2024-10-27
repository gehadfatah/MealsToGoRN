import React from "react";
import styled from "styled-components/native";
import {Icon} from "../../restaurants/components/restaurant-info-card.styles";
import { Card } from "react-native-paper";
import {Image, View} from "react-native";

const MyText = styled.Text`padding: 10px`;
const Item=styled.View`
    padding: 10px;
    align-items: center;
`
export const MapCallout = ({ restaurant }) => (
    <Item>
    <Image  border-radius={10} source={{ uri: restaurant.photos[0]  }} width={120} height={120} />
    <MyText  >{restaurant.name}</MyText>
    </Item>
);
