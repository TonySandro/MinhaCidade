import styled from "styled-components/native";

export const Container = styled.View`
  font-family: Roboto;
  flex: 1;
  background-color: #fff;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Header = styled.View`
  padding-top: 10%;
  padding-right: 5%;
  text-align: center;

  height: 18%;
  width: 100%;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #7c73e6;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  font-family: Roboto;
  flex: 1;
  justify-content: center;
  align-self: center;
`;

export const Mold = styled.View`
  display: flex;
  /* background -color: red; */
  height: 100px;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PointImage = styled.Image`
  max-height: 100%;
  max-width: 35%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const TextFild = styled.View`
  position: absolute;
  margin-left: 38%;
`;

export const TitlePoint = styled.Text`
  font-size: 17px;
  color: #7c73e6;
  font-weight: bold;
`;

export const Location = styled.Text`
  font-size: 14px;
  margin-top: 30%;
  color: #ff1212;
`;

export const Exit = styled.View`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 0;
  display: flex;
  align-items: center;

  /* background: #fd1515; */
`;
