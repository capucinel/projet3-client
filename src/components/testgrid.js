import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleOnly = () => (

    <Grid container columns={3}>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>
    </Grid>
  )

export default GridExampleOnly



