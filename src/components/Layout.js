import React, { Component } from 'react';
import { Container, Divider, Label } from 'semantic-ui-react';

class Layout extends Component {
  render() {
    const data = this.props.data;
    console.log("Layout 1: ", data);
    const categories = data.categories.market.split(',');
    const engine = data.engine;

    return (
      <Container>
        <h1>{data.make.name} {data.model.name} {data.year.year}</h1>
        <h3>{data.name}</h3>

        {
          categories.map((cat)=> {
            return (<Label tag key={cat}>{cat}</Label>);
          })
        }  

        <Divider hidden/>

        <h4>Miles Per Gallon (MPG)</h4>
        <Label>
          City
          <Label.Detail>{data.MPG.city}</Label.Detail>
        </Label>
        <Label>
          Highway
          <Label.Detail>{data.MPG.highway}</Label.Detail>
        </Label>

        <Divider hidden/>

        <h4>Horsepower/Torque</h4>
        <Label>
          Horsepower
            <Label.Detail>{engine.horsepower} @ {engine.rpm.horsepower} RPM</Label.Detail> 
        </Label>
        <Label>
          Torque
            <Label.Detail>{engine.torque} @ {engine.rpm.torque} RPM</Label.Detail> 
        </Label>

        <Divider hidden/>

        <h4>Engine</h4>
        <Label>
          Manufacturer Engine Code
            <Label.Detail>{engine.manufacturerEngineCode}</Label.Detail>
        </Label>
        <Label>
          Compression Ratio
            <Label.Detail>{engine.compressionRatio}</Label.Detail>
        </Label>
        <Label>
          Displacement
            <Label.Detail>{engine.displacement}</Label.Detail>
        </Label>
        <Label>
          Configuration
            <Label.Detail>{engine.configuration + " " + engine.cylinder}</Label.Detail>
        </Label>

      </Container>
    )
  }
}

export default Layout;