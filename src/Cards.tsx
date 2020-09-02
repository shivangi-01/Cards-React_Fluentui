import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import {
  ActionButton,
  FontWeights,
  IButtonStyles,
  Icon,
  IIconStyles,
  Image,
  Persona,
  Stack,
  IStackTokens,
  Text,
  ITextStyles,
} from 'office-ui-fabric-react';
import CPP from '../src/images/c++.jpg';



const CardVerticalExample=(props:any)=> {

    const siteTextStyles: ITextStyles = {
      root: {
        color: '#025F52',
        fontWeight: FontWeights.semibold,
      },
    };
    const descriptionTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.semibold,
      },
    };
    const helpfulTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.regular,
      },
    };
  

   

    const sectionStackTokens: IStackTokens = { childrenGap: 25 };
    const cardTokens: ICardTokens = { childrenMargin: 12 };
   
    return (
    <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
        <Stack horizontal tokens={sectionStackTokens}>
        <Card
          tokens={cardTokens}
      
        >
          <Card.Item>
    <h4> {props.heading}</h4>
          </Card.Item>
          <Card.Item fill>
            <Image src={props.imgsrc} width="100%" alt="Placeholder image."/>
          </Card.Item>
          <Card.Section>
            <Text variant="small" styles={siteTextStyles}>
               {props.text1}
            </Text>
            <Text styles={descriptionTextStyles}> {props.text2}</Text>
            <Text variant="small" styles={helpfulTextStyles}>
             <a href={props.link}>
               click here  
             </a>
            </Text>
          </Card.Section>
        </Card>
        </Stack>
        </div>
        </div>
    );
  
}
export default CardVerticalExample;