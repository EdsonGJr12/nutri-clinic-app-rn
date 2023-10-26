import { Dimensions } from "react-native";

const MARGIN_ITEM = 10;

const PERCENTAGE_ITEM_WIDTH = 0.7;
const ITEM_WIDTH = (Dimensions.get("window").width) * PERCENTAGE_ITEM_WIDTH;

const pergentualRecuo = (1 - PERCENTAGE_ITEM_WIDTH) / 2;
const RECUO = Dimensions.get("window").width * pergentualRecuo;

export {
    MARGIN_ITEM,
    ITEM_WIDTH,
    RECUO,
};