import React from "react";
import styled, { ThemeProvider } from "styled-components/native";

const theme = { colors: { primary: "#6200ee", text: "#333" } };

const Typography = styled.Text`
  font-size: ${(props) =>
    props.$h1 ? "24px" : props.$h2 ? "20px" : props.$caption ? "12px" : "16px"};
  font-weight: ${(props) => (props.$h1 || props.$h2 ? "bold" : "normal")};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`;
const Card = styled.View`
  padding: ${(props) => props.$spacing || "16px"};
  background-color: white;
  border-radius: 8px;
  elevation: 3;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px;
  border-radius: 6px;
  align-items: center;
  margin-top: 10px;
`;

export default function Exercicio08() {
  return (
    <ThemeProvider theme={theme}>
      {}
      <Card $spacing="24px" style={{ marginTop: 50, marginHorizontal: 20 }}>
        <Typography $h1>Título H1</Typography>
        <Typography>Oi</Typography>
        <Button>
          <Typography style={{ color: "white", marginBottom: 0 }}>
            Clique Aqui
          </Typography>
        </Button>
      </Card>
    </ThemeProvider>
  );
}
