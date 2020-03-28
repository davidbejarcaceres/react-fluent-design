import React, {lazy, Suspense, useState } from 'react'
import fruits from "../fruits";
import { Fruit } from '../fruits';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ListLeft = lazy(() => import("./ListLeft"))
const DetailsContent = lazy(() => import("./DetailsContent"))

const MainPage: React.SFC<any> = ({ theme }) => {
  const [selectedFruit, setselectedFruit] = useState<any>();
  const [frutasDB, setfruits] = useState(fruits.slice());

  function handleFruitSelected(fruit: Fruit) {
    console.log(fruit);
    setselectedFruit(fruit);
  }

  function handleSearchFruit(value: String) {
    setfruits(value ? frutasDB.filter( (fruta: Fruit) => fruta.name.toLowerCase().match(RegExp(value.toLowerCase())) ) : fruits.slice());
  }

  function handleShowAboutInfo(){
    alert("David Béjar Cáceres 2020");
  }

  return (
    <Grid fluid>
      <Row>
        <Col>
        <Suspense fallback={ () => <p>Loading ...</p>}>
        <ListLeft
            onSearchFruit={handleSearchFruit}
            fruits={frutasDB}
            onFruitSelected={handleFruitSelected}
            onShowAboutInfo={handleShowAboutInfo}
          />
        </Suspense>
        </Col>
        <Col lg={8} xl={8}>
          <Suspense fallback={ () => <p>Loading ...</p>}>
          <DetailsContent
            fruit={selectedFruit}
          />
          </Suspense>
        </Col>
      </Row>
    </Grid>
  )
}

export default MainPage;