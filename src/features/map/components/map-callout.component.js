import React from "react";
import styled from "styled-components/native";
import {Icon} from "../../restaurants/components/restaurant-info-card.styles";
import { Card } from "react-native-paper";
import {Image, View} from "react-native";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant}  isMap={true} />
);
