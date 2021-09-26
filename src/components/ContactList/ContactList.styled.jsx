import styled from "@emotion/styled";

export const ContactsList = styled.ul`
  list-style: none;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 350px;
  border: 2px solid #2e8b57;
  border-radius: 15px;
  padding: 10px;
  background-color: #9acd32;
  margin-bottom: 10px;
`;
export const ButtonDelete = styled.button`
  background-color: #2e8b57;
  padding: 8px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
`;
