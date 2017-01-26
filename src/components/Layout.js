import React, { Component } from 'react';
import { Grid, Segment, Image, Container, Divider, Icon, Label } from 'semantic-ui-react';

class Layout extends Component {
  

  render() {
    const data = this.props.data;
    
    const type = Array.isArray(data);
    console.log("Layout 1: ", type);
    console.log("Layout 1: ", data);
    const categories = data.categories.market.split(',');
    console.log('categories: ', categories);
    

    console.log("data: ", data);
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

        <h2>Miles Per Gallon (MPG)</h2>
        <Label>
          City
          <Label.Detail>{data.MPG.city}</Label.Detail>
        </Label>
        <Label>
          Highway
          <Label.Detail>{data.MPG.highway}</Label.Detail>
        </Label>

        <Divider hidden/>

        <h2>Horsepower/Torque</h2>
        <Label>
          Horsepower
            <Label.Detail>{data.engine.horsepower} @ {data.engine.rpm.horsepower} RPM</Label.Detail> 
        </Label>
        <Label>
          Torque
            <Label.Detail>{data.engine.torque} @ {data.engine.rpm.torque} RPM</Label.Detail> 
        </Label>

        <Divider hidden/>

        <Charts />

        <Divider hidden/>

        <h1>HTML Ipsum Presents</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

        <h2>Header Level 2</h2>

        <ol>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

        <h3>Header Level 3</h3>

        <ul>
           <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
           <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>

        <pre><code>
          display: block;
          width: 300px;
          height: 80px;
        </code></pre>

        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

        <ul>
           <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
           <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
           <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
           <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
        </ul>

        <dl>
           <dt>Definition list</dt>
           <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</dd>
           <dt>Lorem ipsum dolor sit amet</dt>
           <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</dd>
        </dl>


                  

          <Grid columns={2}>
            <Grid.Row>

              <Grid.Column mobile={16} tablet={10} computer={11} largeScreen={11}>
            
              </Grid.Column>

              <Grid.Column mobile={16} tablet={6} computer={5} largeScreen={5}>
            
              </Grid.Column>

              <Grid.Column mobile={16} tablet={10} computer={11} largeScreen={11}>
            
              </Grid.Column>

            </Grid.Row>
          </Grid>

      </Container>
    )
  }
}

export default Layout;