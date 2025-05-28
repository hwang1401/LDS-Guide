'use client'

import { Box, Stack, Grid, Text, Button } from 'lumir-design-components'
import 'lumir-design-components/styles'
import 'lumir-design-tokens/css'
import Link from 'next/link'

export default function LumirDesignSystemDocs() {
  const menuItems = [
    {
      title: 'Foundation 토큰',
      description: '색상, 타이포그래피, 간격 등 기본 디자인 토큰',
      icon: '🏗️',
      href: '/tokens/foundation',
      color: 'primary'
    },
    {
      title: 'Semantic 토큰',
      description: 'Foundation 토큰을 기반으로 한 의미론적 토큰',
      icon: '🎯',
      href: '/tokens/semantic',
      color: 'secondary'
    },
    {
      title: 'Primitive 컴포넌트',
      description: 'Box, Stack, Grid 등 기본 레이아웃 컴포넌트',
      icon: '📦',
      href: '/components/primitive',
      color: 'primary'
    },
    {
      title: 'Compound 컴포넌트',
      description: 'Button 등 복합 UI 컴포넌트',
      icon: '🔘',
      href: '/components/compound',
      color: 'secondary'
    }
  ]

  return (
    <Box backgroundColor="background" minHeight="100vh">
      {/* Header */}
      <Box backgroundColor="surface" padding="xl" borderWidth="thin" borderColor="secondary" style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}>
        <Stack spacing="md" align="center">
          <Text variant="hero-1" weight="bold" color="primary" align="center">
            🎨 Lumir Design System
              </Text>
          <Text variant="body-1" color="secondary" align="center">
            디자인 토큰과 컴포넌트 가이드
                        </Text>
                      </Stack>
                    </Box>

      {/* Main Content */}
      <Box padding="xl">
        <Box maxWidth="1200px" style={{ margin: '0 auto' }}>
          <Stack spacing="xl">
            
            {/* Welcome Section */}
            <Stack spacing="lg" align="center">
              <Text variant="title-1" weight="bold" align="center">
                디자인 시스템 둘러보기
                </Text>
              <Text variant="body-1" color="secondary" align="center" style={{ maxWidth: '600px' }}>
                Lumir Design System의 토큰과 컴포넌트를 체계적으로 탐색해보세요. 
                각 섹션에서 상세한 가이드와 인터랙티브 예시를 확인할 수 있습니다.
                            </Text>
                  </Stack>

            {/* Navigation Cards */}
                <Grid columns={2} gap="xl">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} style={{ textDecoration: 'none' }}>
                  <Box 
                    backgroundColor="surface" 
                    padding="xl" 
                    borderRadius="lg" 
                             borderWidth="thin" 
                             borderColor="secondary"
                    shadow="sm"
                           style={{ 
                       cursor: 'pointer',
                       transition: 'all 0.2s ease'
                     }}
                  >
               <Stack spacing="lg">
                      <Stack direction="row" spacing="md" align="center">
                        <Box 
                          backgroundColor={item.color as any} 
                          padding="md" 
                         borderRadius="md"
                                                     style={{ minWidth: '60px', minHeight: '60px' }}
                         >
                           <Stack spacing="none" align="center" justify="center" style={{ height: '100%' }}>
                             <Text variant="heading-2" align="center">{item.icon}</Text>
               </Stack>
             </Box>
                         <Stack spacing="sm">
                 <Text variant="heading-2" weight="bold">
                             {item.title}
                 </Text>
                 <Text variant="body-2" color="secondary">
                             {item.description}
                 </Text>
                     </Stack>
                   </Stack>

                       <Stack direction="row" spacing="sm" justify="space-between" align="center">
                 <Text variant="body-2" color="secondary">
                           자세히 알아보기
                 </Text>
                         <Text variant="body-1" color="primary">
                           →
                         </Text>
                       </Stack>
                 </Stack>
                         </Box>
                 </Link>
                     ))}
                   </Grid>

            {/* Quick Stats */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg" borderWidth="thin" borderColor="secondary">
               <Stack spacing="lg">
                <Text variant="heading-2" weight="bold" align="center">
                  시스템 구성 요소
                 </Text>
                 <Grid columns={4} gap="lg">
                   <Stack spacing="sm" align="center">
                    <Text variant="heading-1" weight="bold" color="primary">50+</Text>
                    <Text variant="body-2" color="secondary" align="center">Foundation 토큰</Text>
                   </Stack>
                   <Stack spacing="sm" align="center">
                    <Text variant="heading-1" weight="bold" color="primary">30+</Text>
                    <Text variant="body-2" color="secondary" align="center">Semantic 토큰</Text>
                   </Stack>
                   <Stack spacing="sm" align="center">
                    <Text variant="heading-1" weight="bold" color="primary">3</Text>
                    <Text variant="body-2" color="secondary" align="center">Primitive 컴포넌트</Text>
                   </Stack>
                   <Stack spacing="sm" align="center">
                    <Text variant="heading-1" weight="bold" color="primary">1</Text>
                    <Text variant="body-2" color="secondary" align="center">Compound 컴포넌트</Text>
                   </Stack>
                 </Grid>
               </Stack>
             </Box>

            {/* Getting Started */}
            <Box backgroundColor="secondary" padding="xl" borderRadius="lg">
              <Stack spacing="lg" align="center">
                <Text variant="heading-2" weight="bold" color="secondary" align="center">
                  시작하기
                 </Text>
                <Text variant="body-1" color="secondary" align="center" style={{ maxWidth: '500px' }}>
                  Foundation 토큰부터 시작해서 Semantic 토큰, 그리고 컴포넌트 순서로 탐색하는 것을 권장합니다.
                 </Text>
                <Link href="/tokens/foundation">
                  <Button variant="outlined" colorScheme="secondary" size="lg">
                    Foundation 토큰부터 시작하기
                  </Button>
                </Link>
               </Stack>
             </Box>

                         </Stack>
                       </Box>
                       </Box>

      {/* Footer */}
      <Box backgroundColor="surface" padding="lg" borderWidth="thin" borderColor="secondary" style={{ borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
                       <Stack spacing="sm" align="center">
          <Text variant="body-2" color="secondary" align="center">
            Lumir Design System v1.0
                         </Text>
                         <Text variant="caption-2" color="secondary" align="center">
            일관되고 확장 가능한 디자인을 위한 토큰과 컴포넌트 시스템
                         </Text>
                       </Stack>
                         </Box>
                         </Box>
  )
}
