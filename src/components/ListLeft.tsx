import React, {useMemo} from 'react'
import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";
import AutoSuggestBox from "react-uwp/AutoSuggestBox";
import { Fruit } from '../fruits';

const ListLeft: React.SFC<{onFruitSelected: Function,
    fruits: Array<Fruit>,
    onSearchFruit: Function,
    onShowAboutInfo: Function}> = ({onFruitSelected, fruits, onSearchFruit, onShowAboutInfo}) => {
  const baseStyle: React.CSSProperties = {
    margin: 10
  };

  const navigationTopNodes: Array<JSX.Element> = [];
    const navigationBottomNode = [
    <SplitViewCommand label="About" icon={"\uE946"} onClick={() => onShowAboutInfo()}/>,
  ];

  navigationTopNodes.push(
    <AutoSuggestBox
    placeholder="Search"
    onChangeValue={(value: any) => onSearchFruit(value)}
    />
  )
    
  function fillArray() {
    fruits.forEach(fruit => navigationTopNodes.push(
      <SplitViewCommand label={fruit.name} icon={"\uEDB0"} onClick={() => onFruitSelected(fruit)}/>
    ))
  }

  fillArray();

  return useMemo(() => (
    <NavigationView
          style={baseStyle}
          pageTitle="Fruits"
          displayMode="compact"
          autoResize={false}
          background="https://www.go593.com/sites/default/files/styles/full_post/public/astrofotografia-chimborazo-EXC-go593.jpg?itok=qjMPVj3F"
          initWidth={48}
          expandedWidth={250}
          navigationTopNodes={navigationTopNodes}
          navigationBottomNodes={navigationBottomNode}
          focusNavigationNodeIndex={3}
          defaultExpanded
          isControlled     
        >
        </NavigationView>
  ), []);
}

export default ListLeft

