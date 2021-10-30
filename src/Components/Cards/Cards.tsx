import React from "react";
import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { borderRadius, boxShadow, Colors, constRow } from "../../const";

const Box: FC = ({}) => {
  return <View style={[box, boxShadow, borderRadius]} />;
};

const Row: FC = ({ children }) => {
  return <View style={[constRow, row]}>{children}</View>;
};

export const Cards: FC = () => {
  const length = 4;

  return (
    <>
      {Array.from({ length: 5 }, (_, rowID) => {
        return (
          <Row key={rowID}>
            {Array.from({ length }, (_, boxID) => {
              return <Box key={boxID} />;
            })}
          </Row>
        );
      })}
    </>
  );
};

const { box, row } = StyleSheet.create({
  box: {
    width: "20%",
    height: "100%",
    marginLeft: "4%",
    backgroundColor: Colors.LightGay,
  },
  row: {
    marginTop: "5.5%",
    width: "100%",
    height: "15%",
  },
});
