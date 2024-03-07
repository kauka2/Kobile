import { Text } from 'react-native';
import { Slide1 } from "./src/screens/Slide1";
import { Dispatch, SetStateAction, useState } from 'react';
export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}
export default function App() {
  const [page, setPage] = useState(1)
  return (
    <Slide1 setPageI={setPage} />
  );
}
