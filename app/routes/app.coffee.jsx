import { Card, Layout, MediaCard, Page } from '@shopify/polaris'
import React from 'react'

const coffee = () => {
  return (
    <Page>
        <Layout>
            <Layout.Section>
                <Card>
                    <h1 style={{color: 'Brown'}}>Welcome to our Coffee shop </h1>
                </Card>
                <MediaCard
      title="Get your Coffee"
      primaryAction={{
        content: 'Order your Coffee here',
        onAction: () => {},
      }}
      description="Elevate Your Coffee Experience with Us!"
      popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </MediaCard>
            </Layout.Section>
            
        </Layout>
    </Page>
  )
}

export default coffee