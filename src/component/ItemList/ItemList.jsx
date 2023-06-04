// import img from '../../image/pexels-felix-mittermeier-1459497.jpg'

import {
    ItemListWrapp,
    Conteiner,
    SecTitle,
    List,
    Item,
    WrappItem
} from './ItemListStyled';
 
const ItemList = () => {
    return (
        <ItemListWrapp>
            <Conteiner>
                <SecTitle>ItemList</SecTitle>
                <List>
                    <Item>
                        <WrappItem>
                            {/* <img src={img} /> */}
                        </WrappItem>
                    </Item>
                    <Item>
                        <WrappItem>
                            {/* <img src={img} /> */}
                        </WrappItem>
                    </Item>
                    <Item>
                        <WrappItem>
                            {/* <img src={img} /> */}
                        </WrappItem>
                    </Item>
                    <Item>
                        <WrappItem>
                            {/* <img src={img} /> */}
                        </WrappItem>
                    </Item>
                    <Item>
                        <WrappItem>
                            {/* <img src={img} /> */}
                        </WrappItem>
                    </Item>
                </List>
            </Conteiner>
        </ItemListWrapp>
    )
}

export default ItemList;