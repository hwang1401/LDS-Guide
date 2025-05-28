'use client'

import { Box, Stack, Grid, Text, Button } from 'lumir-design-components'
import 'lumir-design-components/styles'
import 'lumir-design-tokens/css'
import Link from 'next/link'
import { useState } from 'react'

// Duration 애니메이션 프리뷰 컴포넌트
function DurationPreview({ duration, value }: { duration: string; value: string }) {
  const [isAnimating, setIsAnimating] = useState(false)
  
  const handleAnimate = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), parseInt(value) + 100)
  }
  
  return (
    <Stack spacing="xs" align="center">
      <Button 
        variant="outlined" 
        colorScheme="primary" 
        size="sm"
        onClick={handleAnimate}
        style={{ fontSize: '10px', padding: '4px 8px' }}
      >
        재생
      </Button>
      <Box 
        backgroundColor="primary"
        borderRadius="sm"
        style={{ 
          width: '20px', 
          height: '20px',
          transition: `transform ${duration}`,
          transform: isAnimating ? 'translateX(60px)' : 'translateX(0px)'
        }}
      />
    </Stack>
  )
}

// Easing 애니메이션 프리뷰 컴포넌트
function EasingPreview({ easing, value }: { easing: string; value: string }) {
  const [isAnimating, setIsAnimating] = useState(false)
  
  const handleAnimate = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 800)
  }
  
  return (
    <Stack spacing="xs" align="center">
      <Button 
        variant="outlined" 
        colorScheme="secondary" 
        size="sm"
        onClick={handleAnimate}
        style={{ fontSize: '10px', padding: '4px 8px' }}
      >
        재생
      </Button>
      <Box 
        backgroundColor="secondary"
        borderRadius="sm"
        style={{ 
          width: '20px', 
          height: '20px',
          transition: `transform 600ms ${easing}`,
          transform: isAnimating ? 'translateX(60px)' : 'translateX(0px)'
        }}
      />
    </Stack>
  )
}

export default function FoundationTokensPage() {
  return (
    <Box backgroundColor="background" padding="xl" minHeight="100vh">
      <Box maxWidth="1200px" style={{ margin: '0 auto' }}>
        
        <Stack spacing="xl">
          {/* 페이지 제목 */}
          <Stack spacing="md" align="center">
            <Text variant="hero-1" weight="bold" align="center">
              🏗️ Foundation 토큰
            </Text>
            <Text variant="body-1" color="secondary" align="center">
              디자인 시스템의 기본이 되는 파운데이션 토큰들입니다. 모든 컴포넌트와 시멘틱 토큰의 기반이 됩니다.
            </Text>
            <Link href="/">
              <Button variant="outlined" colorScheme="secondary">
                ← 메인으로 돌아가기
              </Button>
            </Link>
          </Stack>

          {/* Foundation Colors */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🎨 Color Tokens
            </Text>
            
            {/* Transparent Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Transparent Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Description</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-transparent-light-100', light: 'rgba(0, 0, 0, 0.12)', dark: 'rgba(0, 0, 0, 0.24)', desc: '12% opacity for light theme' },
                    { token: 'foundation-color-transparent-light-200', light: 'rgba(0, 0, 0, 0.06)', dark: 'rgba(0, 0, 0, 0.12)', desc: '6% opacity for light theme' },
                    { token: 'foundation-color-transparent-light-300', light: 'rgba(0, 0, 0, 0.20)', dark: 'rgba(0, 0, 0, 0.40)', desc: '20% opacity for light theme' },
                    { token: 'foundation-color-transparent-light-400', light: 'rgba(0, 0, 0, 0.30)', dark: 'rgba(0, 0, 0, 0.30)', desc: '30% opacity for light theme' },
                    { token: 'foundation-color-transparent-light-500', light: 'rgba(0, 0, 0, 0.14)', dark: 'rgba(0, 0, 0, 0.28)', desc: '14% opacity for light theme' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '12px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Text variant="caption-1" color="secondary">{item.desc}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Grey Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Grey Scale Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-grey-light-0', light: '#000000', dark: '#FFFFFF', scale: '0%' },
                    { token: 'foundation-color-grey-light-10', light: '#191919', dark: '#E5E5E5', scale: '10%' },
                    { token: 'foundation-color-grey-light-20', light: '#333333', dark: '#CCCCCC', scale: '20%' },
                    { token: 'foundation-color-grey-light-30', light: '#4C4C4C', dark: '#B2B2B2', scale: '30%' },
                    { token: 'foundation-color-grey-light-40', light: '#666666', dark: '#999999', scale: '40%' },
                    { token: 'foundation-color-grey-light-50', light: '#7F7F7F', dark: '#7F7F7F', scale: '50%' },
                    { token: 'foundation-color-grey-light-60', light: '#999999', dark: '#666666', scale: '60%' },
                    { token: 'foundation-color-grey-light-70', light: '#B2B2B2', dark: '#4C4C4C', scale: '70%' },
                    { token: 'foundation-color-grey-light-80', light: '#CCCCCC', dark: '#333333', scale: '80%' },
                    { token: 'foundation-color-grey-light-90', light: '#E5E5E5', dark: '#191919', scale: '90%' },
                    { token: 'foundation-color-grey-light-100', light: '#FFFFFF', dark: '#000000', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Blue Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Blue Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-blue-light-0', light: '#E3F2FD', dark: '#0B3C83', scale: '0%' },
                    { token: 'foundation-color-blue-light-10', light: '#BBDEFB', dark: '#0D47A1', scale: '10%' },
                    { token: 'foundation-color-blue-light-20', light: '#90CAF9', dark: '#1565C0', scale: '20%' },
                    { token: 'foundation-color-blue-light-30', light: '#64B5F6', dark: '#1976D2', scale: '30%' },
                    { token: 'foundation-color-blue-light-40', light: '#42A5F5', dark: '#1E88E5', scale: '40%' },
                    { token: 'foundation-color-blue-light-50', light: '#2196F3', dark: '#2196F3', scale: '50%' },
                    { token: 'foundation-color-blue-light-60', light: '#1E88E5', dark: '#42A5F5', scale: '60%' },
                    { token: 'foundation-color-blue-light-70', light: '#1976D2', dark: '#64B5F6', scale: '70%' },
                    { token: 'foundation-color-blue-light-80', light: '#1565C0', dark: '#90CAF9', scale: '80%' },
                    { token: 'foundation-color-blue-light-90', light: '#0D47A1', dark: '#BBDEFB', scale: '90%' },
                    { token: 'foundation-color-blue-light-100', light: '#0B3C83', dark: '#E3F2FD', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Red Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Red Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-red-light-0', light: '#FFEBEE', dark: '#8C0D0D', scale: '0%' },
                    { token: 'foundation-color-red-light-10', light: '#FFCDD2', dark: '#B71C1C', scale: '10%' },
                    { token: 'foundation-color-red-light-20', light: '#EF9A9A', dark: '#C62828', scale: '20%' },
                    { token: 'foundation-color-red-light-30', light: '#E57373', dark: '#D32F2F', scale: '30%' },
                    { token: 'foundation-color-red-light-40', light: '#EF5350', dark: '#E53935', scale: '40%' },
                    { token: 'foundation-color-red-light-50', light: '#F44336', dark: '#F44336', scale: '50%' },
                    { token: 'foundation-color-red-light-60', light: '#E53935', dark: '#EF5350', scale: '60%' },
                    { token: 'foundation-color-red-light-70', light: '#D32F2F', dark: '#E57373', scale: '70%' },
                    { token: 'foundation-color-red-light-80', light: '#C62828', dark: '#EF9A9A', scale: '80%' },
                    { token: 'foundation-color-red-light-90', light: '#B71C1C', dark: '#FFCDD2', scale: '90%' },
                    { token: 'foundation-color-red-light-100', light: '#8C0D0D', dark: '#FFEBEE', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Green Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Green Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-green-light-0', light: '#E8F5E9', dark: '#15411B', scale: '0%' },
                    { token: 'foundation-color-green-light-10', light: '#C8E6C9', dark: '#1B5E20', scale: '10%' },
                    { token: 'foundation-color-green-light-20', light: '#A5D6A7', dark: '#2E7D32', scale: '20%' },
                    { token: 'foundation-color-green-light-30', light: '#81C784', dark: '#388E3C', scale: '30%' },
                    { token: 'foundation-color-green-light-40', light: '#66BB6A', dark: '#43A047', scale: '40%' },
                    { token: 'foundation-color-green-light-50', light: '#4CAF50', dark: '#4CAF50', scale: '50%' },
                    { token: 'foundation-color-green-light-60', light: '#43A047', dark: '#66BB6A', scale: '60%' },
                    { token: 'foundation-color-green-light-70', light: '#388E3C', dark: '#81C784', scale: '70%' },
                    { token: 'foundation-color-green-light-80', light: '#2E7D32', dark: '#A5D6A7', scale: '80%' },
                    { token: 'foundation-color-green-light-90', light: '#1B5E20', dark: '#C8E6C9', scale: '90%' },
                    { token: 'foundation-color-green-light-100', light: '#15411B', dark: '#E8F5E9', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Yellow Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Yellow Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-yellow-light-0', light: '#FFFDE7', dark: '#B26F11', scale: '0%' },
                    { token: 'foundation-color-yellow-light-20', light: '#FFF59D', dark: '#F9A825', scale: '20%' },
                    { token: 'foundation-color-yellow-light-40', light: '#FFEE58', dark: '#FDD835', scale: '40%' },
                    { token: 'foundation-color-yellow-light-50', light: '#FFEB3B', dark: '#FFEB3B', scale: '50%' },
                    { token: 'foundation-color-yellow-light-70', light: '#FBC02D', dark: '#FFF176', scale: '70%' },
                    { token: 'foundation-color-yellow-light-90', light: '#F57F17', dark: '#FFF9C4', scale: '90%' },
                    { token: 'foundation-color-yellow-light-100', light: '#B26F11', dark: '#FFFDE7', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Orange Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Orange Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-orange-light-0', light: '#FFF3E0', dark: '#BF360C', scale: '0%' },
                    { token: 'foundation-color-orange-light-20', light: '#FFCC80', dark: '#EF6C00', scale: '20%' },
                    { token: 'foundation-color-orange-light-40', light: '#FFA726', dark: '#FB8C00', scale: '40%' },
                    { token: 'foundation-color-orange-light-50', light: '#FF9800', dark: '#FF9800', scale: '50%' },
                    { token: 'foundation-color-orange-light-70', light: '#F57C00', dark: '#FFB74D', scale: '70%' },
                    { token: 'foundation-color-orange-light-90', light: '#E65100', dark: '#FFE0B2', scale: '90%' },
                    { token: 'foundation-color-orange-light-100', light: '#BF360C', dark: '#FFF3E0', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Teal Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Teal Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-teal-light-0', light: '#E0F2F1', dark: '#00251A', scale: '0%' },
                    { token: 'foundation-color-teal-light-20', light: '#80CBC4', dark: '#00695C', scale: '20%' },
                    { token: 'foundation-color-teal-light-40', light: '#26A69A', dark: '#00897B', scale: '40%' },
                    { token: 'foundation-color-teal-light-50', light: '#009688', dark: '#009688', scale: '50%' },
                    { token: 'foundation-color-teal-light-70', light: '#00796B', dark: '#4DB6AC', scale: '70%' },
                    { token: 'foundation-color-teal-light-90', light: '#004D40', dark: '#B2DFDB', scale: '90%' },
                    { token: 'foundation-color-teal-light-100', light: '#00251A', dark: '#E0F2F1', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Purple Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Purple Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-purple-light-0', light: '#F3E5F5', dark: '#311B92', scale: '0%' },
                    { token: 'foundation-color-purple-light-20', light: '#CE93D8', dark: '#6A1B9A', scale: '20%' },
                    { token: 'foundation-color-purple-light-40', light: '#AB47BC', dark: '#8E24AA', scale: '40%' },
                    { token: 'foundation-color-purple-light-50', light: '#9C27B0', dark: '#9C27B0', scale: '50%' },
                    { token: 'foundation-color-purple-light-70', light: '#7B1FA2', dark: '#BA68C8', scale: '70%' },
                    { token: 'foundation-color-purple-light-90', light: '#4A148C', dark: '#E1BEE7', scale: '90%' },
                    { token: 'foundation-color-purple-light-100', light: '#311B92', dark: '#F3E5F5', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Pink Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Pink Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-pink-light-0', light: '#FCE4EC', dark: '#560027', scale: '0%' },
                    { token: 'foundation-color-pink-light-20', light: '#F48FB1', dark: '#AD1457', scale: '20%' },
                    { token: 'foundation-color-pink-light-40', light: '#EC407A', dark: '#D81B60', scale: '40%' },
                    { token: 'foundation-color-pink-light-50', light: '#E91E63', dark: '#E91E63', scale: '50%' },
                    { token: 'foundation-color-pink-light-70', light: '#C2185B', dark: '#F06292', scale: '70%' },
                    { token: 'foundation-color-pink-light-90', light: '#880E4F', dark: '#F8BBD0', scale: '90%' },
                    { token: 'foundation-color-pink-light-100', light: '#560027', dark: '#FCE4EC', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Brown Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Brown Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={5} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Light Value</Text>
                      <Text variant="label-1" weight="bold">Dark Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Scale</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-color-brown-light-0', light: '#EFEBE9', dark: '#1E0F0A', scale: '0%' },
                    { token: 'foundation-color-brown-light-20', light: '#BCAAA4', dark: '#4E342E', scale: '20%' },
                    { token: 'foundation-color-brown-light-40', light: '#8D6E63', dark: '#6D4C41', scale: '40%' },
                    { token: 'foundation-color-brown-light-50', light: '#795548', dark: '#795548', scale: '50%' },
                    { token: 'foundation-color-brown-light-70', light: '#5D4037', dark: '#A1887F', scale: '70%' },
                    { token: 'foundation-color-brown-light-90', light: '#3E2723', dark: '#D7CCC8', scale: '90%' },
                    { token: 'foundation-color-brown-light-100', light: '#1E0F0A', dark: '#EFEBE9', scale: '100%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={5} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.light}</Text>
                        <Text variant="caption-2">{item.dark}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.light, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.scale}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Typography Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📝 Typography Tokens
            </Text>
            
            {/* Font Family */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Font Family</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  <Box padding="md">
                    <Grid columns={3} gap="md">
                      <Text variant="body-2" weight="bold">foundation-font-fontFamily-base</Text>
                      <Text variant="caption-2">'Pretendard', sans-serif</Text>
                      <Text variant="body-1">안녕하세요 Hello World</Text>
                    </Grid>
                  </Box>
                </Stack>
              </Box>
            </Stack>

            {/* Font Size */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Font Size</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-font-fontSize-120', value: '12px', size: 12 },
                    { token: 'foundation-font-fontSize-140', value: '14px', size: 14 },
                    { token: 'foundation-font-fontSize-160', value: '16px', size: 16 },
                    { token: 'foundation-font-fontSize-200', value: '20px', size: 20 },
                    { token: 'foundation-font-fontSize-240', value: '24px', size: 24 },
                    { token: 'foundation-font-fontSize-300', value: '30px', size: 30 },
                    { token: 'foundation-font-fontSize-360', value: '36px', size: 36 },
                    { token: 'foundation-font-fontSize-480', value: '48px', size: 48 },
                    { token: 'foundation-font-fontSize-600', value: '60px', size: 60 },
                    { token: 'foundation-font-fontSize-720', value: '72px', size: 72 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text style={{ fontSize: `${item.size}px`, lineHeight: 1.2 }}>Aa</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Font Weight */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Font Weight</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-font-fontWeight-100', value: '100', weight: 100 },
                    { token: 'foundation-font-fontWeight-200', value: '200', weight: 200 },
                    { token: 'foundation-font-fontWeight-300', value: '300', weight: 300 },
                    { token: 'foundation-font-fontWeight-400', value: '400', weight: 400 },
                    { token: 'foundation-font-fontWeight-500', value: '500', weight: 500 },
                    { token: 'foundation-font-fontWeight-600', value: '600', weight: 600 },
                    { token: 'foundation-font-fontWeight-700', value: '700', weight: 700 },
                    { token: 'foundation-font-fontWeight-800', value: '800', weight: 800 },
                    { token: 'foundation-font-fontWeight-900', value: '900', weight: 900 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text style={{ fontWeight: item.weight, fontSize: '16px' }}>Font Weight {item.value}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Spacing Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📏 Spacing Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Spacing Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Vertical</Text>
                      <Text variant="label-1" weight="bold">Horizontal</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-spacing-0', vertical: '0px', horizontal: '0px', size: 0 },
                    { token: 'foundation-spacing-20', vertical: '2px', horizontal: '2px', size: 2 },
                    { token: 'foundation-spacing-40', vertical: '4px', horizontal: '4px', size: 4 },
                    { token: 'foundation-spacing-60', vertical: '6px', horizontal: '6px', size: 6 },
                    { token: 'foundation-spacing-80', vertical: '8px', horizontal: '8px', size: 8 },
                    { token: 'foundation-spacing-100', vertical: '10px', horizontal: '10px', size: 10 },
                    { token: 'foundation-spacing-120', vertical: '12px', horizontal: '12px', size: 12 },
                    { token: 'foundation-spacing-160', vertical: '16px', horizontal: '16px', size: 16 },
                    { token: 'foundation-spacing-200', vertical: '20px', horizontal: '20px', size: 20 },
                    { token: 'foundation-spacing-240', vertical: '24px', horizontal: '24px', size: 24 },
                    { token: 'foundation-spacing-320', vertical: '32px', horizontal: '32px', size: 32 },
                    { token: 'foundation-spacing-400', vertical: '40px', horizontal: '40px', size: 40 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.vertical}</Text>
                        <Text variant="caption-2">{item.horizontal}</Text>
                        <Box style={{ display: 'flex', alignItems: 'center', minHeight: '40px' }}>
                          {/* 수직 간격 시각화 */}
                          <Stack spacing="none" align="center" style={{ marginRight: '16px' }}>
                            <Box 
                              backgroundColor="primary"
                              borderRadius="sm"
                              style={{ width: '20px', height: '8px' }}
                            />
                            {item.size > 0 && (
                              <Box 
                                style={{ 
                                  height: `${item.size}px`,
                                  width: '2px',
                                  backgroundColor: '#E5E5E5',
                                  position: 'relative',
                                  minHeight: '2px'
                                }}
                              >
                                <Box
                                  style={{
                                    position: 'absolute',
                                    left: '-3px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '8px',
                                    height: '1px',
                                    backgroundColor: '#999999'
                                  }}
                                />
                              </Box>
                            )}
                            <Box 
                              backgroundColor="primary"
                              borderRadius="sm"
                              style={{ width: '20px', height: '8px' }}
                            />
                          </Stack>
                          
                          {/* 수평 간격 시각화 */}
                          <Stack direction="row" spacing="none" align="center">
                            <Box 
                              backgroundColor="primary"
                              borderRadius="sm"
                              style={{ width: '8px', height: '20px' }}
                            />
                            {item.size > 0 && (
                              <Box 
                                style={{ 
                                  width: `${item.size}px`,
                                  height: '2px',
                                  backgroundColor: '#E5E5E5',
                                  position: 'relative',
                                  minWidth: '2px'
                                }}
                              >
                                <Box
                                  style={{
                                    position: 'absolute',
                                    top: '-3px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '1px',
                                    height: '8px',
                                    backgroundColor: '#999999'
                                  }}
                                />
                              </Box>
                            )}
                            <Box 
                              backgroundColor="primary"
                              borderRadius="sm"
                              style={{ width: '8px', height: '20px' }}
                            />
                          </Stack>
                        </Box>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Size Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📐 Size Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Size Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-size-0', value: '0px', size: 0 },
                    { token: 'foundation-size-20', value: '2px', size: 2 },
                    { token: 'foundation-size-40', value: '4px', size: 4 },
                    { token: 'foundation-size-80', value: '8px', size: 8 },
                    { token: 'foundation-size-120', value: '12px', size: 12 },
                    { token: 'foundation-size-160', value: '16px', size: 16 },
                    { token: 'foundation-size-200', value: '20px', size: 20 },
                    { token: 'foundation-size-240', value: '24px', size: 24 },
                    { token: 'foundation-size-320', value: '32px', size: 32 },
                    { token: 'foundation-size-400', value: '40px', size: 40 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          borderRadius="sm"
                          style={{ width: `${item.size}px`, height: `${item.size}px`, minWidth: '2px', minHeight: '2px' }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Border Radius Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🔄 Border Radius Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Radius Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-radius-0', value: '0px', radius: 0 },
                    { token: 'foundation-radius-20', value: '2px', radius: 2 },
                    { token: 'foundation-radius-40', value: '4px', radius: 4 },
                    { token: 'foundation-radius-60', value: '6px', radius: 6 },
                    { token: 'foundation-radius-80', value: '8px', radius: 8 },
                    { token: 'foundation-radius-100', value: '10px', radius: 10 },
                    { token: 'foundation-radius-120', value: '12px', radius: 12 },
                    { token: 'foundation-radius-140', value: '14px', radius: 14 },
                    { token: 'foundation-radius-160', value: '16px', radius: 16 },
                    { token: 'foundation-radius-180', value: '18px', radius: 18 },
                    { token: 'foundation-radius-200', value: '20px', radius: 20 },
                    { token: 'foundation-radius-1000', value: '10000px', radius: 9999 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          style={{ 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: item.radius === 9999 ? '50%' : `${item.radius}px`
                          }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Stroke Width Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              ✏️ Stroke Width Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Stroke Width Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-strokeWidth-10', value: '1px', width: 1 },
                    { token: 'foundation-strokeWidth-20', value: '2px', width: 2 },
                    { token: 'foundation-strokeWidth-30', value: '3px', width: 3 },
                    { token: 'foundation-strokeWidth-40', value: '4px', width: 4 },
                    { token: 'foundation-strokeWidth-50', value: '5px', width: 5 },
                    { token: 'foundation-strokeWidth-60', value: '6px', width: 6 },
                    { token: 'foundation-strokeWidth-70', value: '7px', width: 7 },
                    { token: 'foundation-strokeWidth-80', value: '8px', width: 8 },
                    { token: 'foundation-strokeWidth-90', value: '9px', width: 9 },
                    { token: 'foundation-strokeWidth-100', value: '10px', width: 10 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          borderRadius="sm"
                          style={{ 
                            width: '60px', 
                            height: `${item.width}px`,
                            minHeight: '1px'
                          }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Height Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📐 Height Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Height Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-height-120', value: '12px', height: 12 },
                    { token: 'foundation-height-160', value: '16px', height: 16 },
                    { token: 'foundation-height-200', value: '20px', height: 20 },
                    { token: 'foundation-height-240', value: '24px', height: 24 },
                    { token: 'foundation-height-280', value: '28px', height: 28 },
                    { token: 'foundation-height-320', value: '32px', height: 32 },
                    { token: 'foundation-height-360', value: '36px', height: 36 },
                    { token: 'foundation-height-400', value: '40px', height: 40 },
                    { token: 'foundation-height-440', value: '44px', height: 44 },
                    { token: 'foundation-height-480', value: '48px', height: 48 },
                    { token: 'foundation-height-520', value: '52px', height: 52 },
                    { token: 'foundation-height-560', value: '56px', height: 56 },
                    { token: 'foundation-height-600', value: '60px', height: 60 },
                    { token: 'foundation-height-640', value: '64px', height: 64 },
                    { token: 'foundation-height-680', value: '68px', height: 68 },
                    { token: 'foundation-height-720', value: '72px', height: 72 },
                    { token: 'foundation-height-760', value: '76px', height: 76 },
                    { token: 'foundation-height-800', value: '80px', height: 80 },
                    { token: 'foundation-height-840', value: '84px', height: 84 },
                    { token: 'foundation-height-880', value: '88px', height: 88 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          borderRadius="sm"
                          style={{ 
                            width: '40px', 
                            height: `${item.height}px`
                          }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Duration Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              ⏱️ Duration Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Duration Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Description</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-duration-100', value: '100ms', desc: '매우 빠른 애니메이션' },
                    { token: 'foundation-duration-200', value: '200ms', desc: '빠른 애니메이션' },
                    { token: 'foundation-duration-300', value: '300ms', desc: '기본 애니메이션' },
                    { token: 'foundation-duration-400', value: '400ms', desc: '중간 애니메이션' },
                    { token: 'foundation-duration-500', value: '500ms', desc: '느린 애니메이션' },
                    { token: 'foundation-duration-600', value: '600ms', desc: '더 느린 애니메이션' },
                    { token: 'foundation-duration-700', value: '700ms', desc: '매우 느린 애니메이션' },
                    { token: 'foundation-duration-800', value: '800ms', desc: '극도로 느린 애니메이션' },
                    { token: 'foundation-duration-900', value: '900ms', desc: '최대 느린 애니메이션' },
                    { token: 'foundation-duration-1000', value: '1000ms', desc: '1초 애니메이션' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2" style={{ fontSize: '11px' }}>{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.desc}</Text>
                        <DurationPreview duration={item.value} value={item.value.replace('ms', '')} />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Easing Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🎭 Easing Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Easing Functions</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Description</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-easing-standard-in', value: 'cubic-bezier(0.4, 0.0, 1, 1)', desc: '표준 진입 애니메이션' },
                    { token: 'foundation-easing-standard-out', value: 'cubic-bezier(0.0, 0.0, 0.2, 1)', desc: '표준 종료 애니메이션' },
                    { token: 'foundation-easing-standard-inOut', value: 'cubic-bezier(0.4, 0.0, 0.2, 1)', desc: '표준 진입/종료 애니메이션' },
                    { token: 'foundation-easing-emphasized-in', value: 'cubic-bezier(0.0, 0.0, 0.2, 1)', desc: '강조된 진입 애니메이션' },
                    { token: 'foundation-easing-emphasized-out', value: 'cubic-bezier(0.4, 0.0, 1, 1)', desc: '강조된 종료 애니메이션' },
                    { token: 'foundation-easing-emphasized-inOut', value: 'cubic-bezier(0.2, 0.0, 0.0, 1)', desc: '강조된 진입/종료 애니메이션' },
                    { token: 'foundation-easing-overshoot-in', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', desc: '오버슈트 진입 애니메이션' },
                    { token: 'foundation-easing-overshoot-out', value: 'cubic-bezier(0.36, 0, 0.66, -0.56)', desc: '오버슈트 종료 애니메이션' },
                    { token: 'foundation-easing-overshoot-inOut', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', desc: '오버슈트 진입/종료 애니메이션' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2" style={{ fontSize: '10px' }}>{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.desc}</Text>
                        <EasingPreview easing={item.value} value={item.value} />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Z-Index Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📚 Z-Index Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Z-Index Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-zIndex-0', value: '0', usage: '기본 레이어' },
                    { token: 'foundation-zIndex-100', value: '100', usage: '낮은 우선순위' },
                    { token: 'foundation-zIndex-200', value: '200', usage: '중간 우선순위' },
                    { token: 'foundation-zIndex-300', value: '300', usage: '높은 우선순위' },
                    { token: 'foundation-zIndex-400', value: '400', usage: '매우 높은 우선순위' },
                    { token: 'foundation-zIndex-500', value: '500', usage: '드롭다운 레이어' },
                    { token: 'foundation-zIndex-600', value: '600', usage: '오버레이 레이어' },
                    { token: 'foundation-zIndex-700', value: '700', usage: '모달 레이어' },
                    { token: 'foundation-zIndex-800', value: '800', usage: '토스트 레이어' },
                    { token: 'foundation-zIndex-900', value: '900', usage: '팝오버 레이어' },
                    { token: 'foundation-zIndex-1000', value: '1000', usage: '최상위 레이어' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Shadow Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🌫️ Shadow Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Light Theme Shadows</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">X/Y/Blur/Spread</Text>
                      <Text variant="label-1" weight="bold">Color</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-shadow-light-0', x: '0px', y: '0px', blur: '0px', spread: '0px', color: 'rgba(0, 0, 0, 0)', shadow: 'none' },
                    { token: 'foundation-shadow-light-10', x: '0px', y: '1px', blur: '2px', spread: '0px', color: 'rgba(0, 0, 0, 0.1)', shadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.1)' },
                    { token: 'foundation-shadow-light-20', x: '0px', y: '2px', blur: '4px', spread: '0px', color: 'rgba(0, 0, 0, 0.1)', shadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)' },
                    { token: 'foundation-shadow-light-30', x: '0px', y: '4px', blur: '8px', spread: '0px', color: 'rgba(0, 0, 0, 0.1)', shadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)' },
                    { token: 'foundation-shadow-light-40', x: '0px', y: '8px', blur: '16px', spread: '0px', color: 'rgba(0, 0, 0, 0.1)', shadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.1)' },
                    { token: 'foundation-shadow-light-50', x: '0px', y: '16px', blur: '24px', spread: '0px', color: 'rgba(0, 0, 0, 0.11)', shadow: '0px 16px 24px 0px rgba(0, 0, 0, 0.11)' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.x} {item.y} {item.blur} {item.spread}</Text>
                        <Text variant="caption-2">{item.color}</Text>
                        <Box 
                          backgroundColor="surface"
                          borderRadius="sm"
                          style={{ 
                            width: '40px', 
                            height: '40px',
                            boxShadow: item.shadow
                          }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Dark Theme Shadows</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">X/Y/Blur/Spread</Text>
                      <Text variant="label-1" weight="bold">Color</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-shadow-dark-0', x: '0px', y: '0px', blur: '0px', spread: '0px', color: 'rgba(0, 0, 0, 0)', shadow: 'none' },
                    { token: 'foundation-shadow-dark-10', x: '0px', y: '1px', blur: '2px', spread: '0px', color: 'rgba(0, 0, 0, 0.2)', shadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.2)' },
                    { token: 'foundation-shadow-dark-20', x: '0px', y: '2px', blur: '4px', spread: '0px', color: 'rgba(0, 0, 0, 0.2)', shadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.2)' },
                    { token: 'foundation-shadow-dark-30', x: '0px', y: '4px', blur: '8px', spread: '0px', color: 'rgba(0, 0, 0, 0.2)', shadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)' },
                    { token: 'foundation-shadow-dark-40', x: '0px', y: '8px', blur: '16px', spread: '0px', color: 'rgba(0, 0, 0, 0.2)', shadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)' },
                    { token: 'foundation-shadow-dark-50', x: '0px', y: '16px', blur: '24px', spread: '0px', color: 'rgba(0, 0, 0, 0.22)', shadow: '0px 16px 24px 0px rgba(0, 0, 0, 0.22)' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.x} {item.y} {item.blur} {item.spread}</Text>
                        <Text variant="caption-2">{item.color}</Text>
                        <Box 
                          backgroundColor="surface"
                          borderRadius="sm"
                          style={{ 
                            width: '40px', 
                            height: '40px',
                            boxShadow: item.shadow
                          }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Blur Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🌀 Blur Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Blur Scale</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-blur-0', value: '0px', blur: 0 },
                    { token: 'foundation-blur-20', value: '2px', blur: 2 },
                    { token: 'foundation-blur-40', value: '4px', blur: 4 },
                    { token: 'foundation-blur-60', value: '6px', blur: 6 },
                    { token: 'foundation-blur-80', value: '8px', blur: 8 },
                    { token: 'foundation-blur-100', value: '10px', blur: 10 },
                    { token: 'foundation-blur-200', value: '20px', blur: 20 },
                    { token: 'foundation-blur-300', value: '30px', blur: 30 },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="primary"
                          borderRadius="sm"
                          style={{ 
                            width: '40px', 
                            height: '40px',
                            filter: `blur(${item.blur}px)`
                          }}
                        />
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Scale Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📊 Scale Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Scale Values</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Percentage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'foundation-scale-0', value: '0', percentage: '0%' },
                    { token: 'foundation-scale-25', value: '0.25', percentage: '25%' },
                    { token: 'foundation-scale-50', value: '0.5', percentage: '50%' },
                    { token: 'foundation-scale-75', value: '0.75', percentage: '75%' },
                    { token: 'foundation-scale-90', value: '0.9', percentage: '90%' },
                    { token: 'foundation-scale-95', value: '0.95', percentage: '95%' },
                    { token: 'foundation-scale-98', value: '0.98', percentage: '98%' },
                    { token: 'foundation-scale-100', value: '1', percentage: '100%' },
                    { token: 'foundation-scale-105', value: '1.05', percentage: '105%' },
                    { token: 'foundation-scale-110', value: '1.1', percentage: '110%' },
                    { token: 'foundation-scale-125', value: '1.25', percentage: '125%' },
                    { token: 'foundation-scale-150', value: '1.5', percentage: '150%' },
                    { token: 'foundation-scale-200', value: '2', percentage: '200%' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '11px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.percentage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

        </Stack>

      </Box>
    </Box>
  )
} 