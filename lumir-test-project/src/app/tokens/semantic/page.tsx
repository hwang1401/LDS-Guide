'use client'

import { Box, Stack, Grid, Text, Button } from 'lumir-design-components'
import 'lumir-design-components/styles'
import 'lumir-design-tokens/css'
import Link from 'next/link'

export default function SemanticTokensPage() {
  return (
    <Box backgroundColor="background" padding="xl" minHeight="100vh">
      <Box maxWidth="1200px" style={{ margin: '0 auto' }}>
        
        <Stack spacing="xl">
          {/* 페이지 제목 */}
          <Stack spacing="md" align="center">
            <Text variant="hero-1" weight="bold" align="center">
              🎯 Semantic 토큰
            </Text>
            <Text variant="body-1" color="secondary" align="center">
              Foundation 토큰을 기반으로 한 의미론적 토큰들입니다. 실제 UI 컴포넌트에서 사용되는 토큰들입니다.
            </Text>
            <Link href="/">
              <Button variant="outlined" colorScheme="secondary">
                ← 메인으로 돌아가기
              </Button>
            </Link>
          </Stack>

          {/* Color Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🎨 Color Tokens
            </Text>
            
            {/* Primary Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Primary Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-color-primary-background-1-rest', value: '#2196F3', usage: 'Primary button background' },
                    { token: 'semantic-color-primary-background-1-hovered', value: '#1E88E5', usage: 'Primary button hover state' },
                    { token: 'semantic-color-primary-background-1-pressed', value: '#42A5F5', usage: 'Primary button pressed state' },
                    { token: 'semantic-color-primary-background-1-selected', value: '#2196F3', usage: 'Primary button selected state' },
                    { token: 'semantic-color-primary-background-1-disabled', value: '#90CAF9', usage: 'Primary button disabled state' },
                    { token: 'semantic-color-primary-background-2-rest', value: '#42A5F5', usage: 'Secondary primary background' },
                    { token: 'semantic-color-primary-foreground-1-rest', value: '#2196F3', usage: 'Primary text color' },
                    { token: 'semantic-color-primary-stroke-1-rest', value: '#1E88E5', usage: 'Primary border color' },
                    { token: 'semantic-color-primary-oncolor-global', value: '#FFFFFF', usage: 'Text on primary background' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.value, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Secondary Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Secondary Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-color-secondary-background-1-rest', value: '#F4F4F4', usage: 'Secondary button background' },
                    { token: 'semantic-color-secondary-background-1-hovered', value: '#EAEAEA', usage: 'Secondary button hover' },
                    { token: 'semantic-color-secondary-background-1-pressed', value: '#E0E0E0', usage: 'Secondary button pressed' },
                    { token: 'semantic-color-secondary-background-2-rest', value: '#EAEAEA', usage: 'Card background level 2' },
                    { token: 'semantic-color-secondary-background-3-rest', value: '#E0E0E0', usage: 'Card background level 3' },
                    { token: 'semantic-color-secondary-background-inverse-rest', value: '#FFFFFF', usage: 'Inverse background' },
                    { token: 'semantic-color-secondary-foreground-1-rest', value: '#333333', usage: 'Primary text color' },
                    { token: 'semantic-color-secondary-foreground-2-rest', value: '#666666', usage: 'Secondary text color' },
                    { token: 'semantic-color-secondary-foreground-3-rest', value: '#999999', usage: 'Tertiary text color' },
                    { token: 'semantic-color-secondary-stroke-1-rest', value: '#999999', usage: 'Primary border color' },
                    { token: 'semantic-color-secondary-stroke-2-rest', value: '#CCCCCC', usage: 'Secondary border color' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.value, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* CTA Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">CTA (Call-to-Action) Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-color-cta-background-1-rest', value: '#66BB6A', usage: 'CTA button background' },
                    { token: 'semantic-color-cta-background-1-hovered', value: '#4CAF50', usage: 'CTA button hover' },
                    { token: 'semantic-color-cta-background-1-pressed', value: '#81C784', usage: 'CTA button pressed' },
                    { token: 'semantic-color-cta-background-1-disabled', value: '#A5D6A7', usage: 'CTA button disabled' },
                    { token: 'semantic-color-cta-foreground-1-rest', value: '#43A047', usage: 'CTA text color' },
                    { token: 'semantic-color-cta-foreground-2-rest', value: '#2E7D32', usage: 'CTA secondary text' },
                    { token: 'semantic-color-cta-stroke-1-rest', value: '#43A047', usage: 'CTA border color' },
                    { token: 'semantic-color-cta-oncolor-global', value: '#FFFFFF', usage: 'Text on CTA background' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.value, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Status Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Status Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-color-status-error-global', value: '#EF5350', usage: 'Error states and messages' },
                    { token: 'semantic-color-status-warning-global', value: '#FFEE58', usage: 'Warning states and messages' },
                    { token: 'semantic-color-status-success-global', value: '#66BB6A', usage: 'Success states and messages' },
                    { token: 'semantic-color-status-info-global', value: '#42A5F5', usage: 'Info states and messages' },
                    { token: 'semantic-color-status-focused-global', value: '#666666', usage: 'Focus states' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: item.value, width: '40px', height: '24px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Overlay Colors */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Overlay Colors</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-color-overlay-background-light-global', value: 'rgba(0, 0, 0, 0.12)', usage: 'General overlay background' },
                    { token: 'semantic-color-overlay-background-light-subtle', value: 'rgba(0, 0, 0, 0.12)', usage: 'Subtle overlay' },
                    { token: 'semantic-color-overlay-background-light-medium', value: 'rgba(0, 0, 0, 0.06)', usage: 'Medium overlay' },
                    { token: 'semantic-color-overlay-background-light-heavy', value: 'rgba(0, 0, 0, 0.20)', usage: 'Heavy overlay' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          borderRadius="sm" 
                          borderWidth="thin" 
                          borderColor="secondary"
                          style={{ backgroundColor: 'white', position: 'relative', width: '40px', height: '24px' }}
                        >
                          <Box style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            right: 0, 
                            bottom: 0, 
                            backgroundColor: item.value,
                            borderRadius: '2px'
                          }} />
                        </Box>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
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
            
            {/* Hero Typography */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Hero Typography</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Specs</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { 
                      token: 'semantic-typography-hero-1-regular', 
                      specs: '48px / 1.6 / -0.025em / 400',
                      fontSize: 48, fontWeight: 400, lineHeight: 1.6, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-hero-1-medium', 
                      specs: '48px / 1.6 / -0.025em / 500',
                      fontSize: 48, fontWeight: 500, lineHeight: 1.6, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-hero-1-bold', 
                      specs: '48px / 1.6 / -0.025em / 700',
                      fontSize: 48, fontWeight: 700, lineHeight: 1.6, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-hero-2-regular', 
                      specs: '36px / 1.6 / -0.025em / 400',
                      fontSize: 36, fontWeight: 400, lineHeight: 1.6, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-hero-2-bold', 
                      specs: '36px / 1.6 / -0.025em / 700',
                      fontSize: 36, fontWeight: 700, lineHeight: 1.6, letterSpacing: '-0.025em'
                    },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.specs}</Text>
                        <Text style={{ 
                          fontSize: `${Math.min(item.fontSize, 24)}px`, 
                          fontWeight: item.fontWeight, 
                          lineHeight: item.lineHeight,
                          letterSpacing: item.letterSpacing
                        }}>
                          Hero Text
                        </Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Title Typography */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Title Typography</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Specs</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { 
                      token: 'semantic-typography-title-1-regular', 
                      specs: '30px / 1.4 / -0.025em / 400',
                      fontSize: 30, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-title-1-bold', 
                      specs: '30px / 1.4 / -0.025em / 700',
                      fontSize: 30, fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-title-2-regular', 
                      specs: '24px / 1.4 / -0.025em / 400',
                      fontSize: 24, fontWeight: 400, lineHeight: 1.4, letterSpacing: '-0.025em'
                    },
                    { 
                      token: 'semantic-typography-title-2-bold', 
                      specs: '24px / 1.4 / -0.025em / 600',
                      fontSize: 24, fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.025em'
                    },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.specs}</Text>
                        <Text style={{ 
                          fontSize: `${Math.min(item.fontSize, 20)}px`, 
                          fontWeight: item.fontWeight, 
                          lineHeight: item.lineHeight,
                          letterSpacing: item.letterSpacing
                        }}>
                          Title Text
                        </Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Body Typography */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Body Typography</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={3} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Specs</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { 
                      token: 'semantic-typography-body-1-regular', 
                      specs: '16px / 1.6 / 0.025em / 400',
                      fontSize: 16, fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.025em'
                    },
                    { 
                      token: 'semantic-typography-body-1-bold', 
                      specs: '16px / 1.6 / 0.025em / 700',
                      fontSize: 16, fontWeight: 700, lineHeight: 1.6, letterSpacing: '0.025em'
                    },
                    { 
                      token: 'semantic-typography-body-2-regular', 
                      specs: '14px / 1.6 / 0.025em / 400',
                      fontSize: 14, fontWeight: 400, lineHeight: 1.6, letterSpacing: '0.025em'
                    },
                    { 
                      token: 'semantic-typography-body-2-bold', 
                      specs: '14px / 1.6 / 0.025em / 700',
                      fontSize: 14, fontWeight: 700, lineHeight: 1.6, letterSpacing: '0.025em'
                    },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.specs}</Text>
                        <Text style={{ 
                          fontSize: `${item.fontSize}px`, 
                          fontWeight: item.fontWeight, 
                          lineHeight: item.lineHeight,
                          letterSpacing: item.letterSpacing
                        }}>
                          Body text example
                        </Text>
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
            
            {/* Vertical Spacing */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Vertical Spacing</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-spacingVer-global-none', value: '0px', size: 0, usage: 'No spacing' },
                    { token: 'semantic-spacingVer-global-xxxs', value: '2px', size: 2, usage: 'Extra extra extra small' },
                    { token: 'semantic-spacingVer-global-xxs', value: '4px', size: 4, usage: 'Extra extra small' },
                    { token: 'semantic-spacingVer-global-xs', value: '6px', size: 6, usage: 'Extra small' },
                    { token: 'semantic-spacingVer-global-sm', value: '8px', size: 8, usage: 'Small spacing' },
                    { token: 'semantic-spacingVer-global-md', value: '10px', size: 10, usage: 'Medium spacing' },
                    { token: 'semantic-spacingVer-global-lg', value: '12px', size: 12, usage: 'Large spacing' },
                    { token: 'semantic-spacingVer-global-xl', value: '16px', size: 16, usage: 'Extra large' },
                    { token: 'semantic-spacingVer-global-xxl', value: '20px', size: 20, usage: 'Extra extra large' },
                    { token: 'semantic-spacingVer-global-xxxl', value: '24px', size: 24, usage: 'Extra extra extra large' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="primary"
                          style={{ width: '40px', height: `${item.size}px`, minHeight: '2px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Horizontal Spacing */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Horizontal Spacing</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-spacingHor-global-none', value: '0px', size: 0, usage: 'No spacing' },
                    { token: 'semantic-spacingHor-global-xs', value: '6px', size: 6, usage: 'Extra small' },
                    { token: 'semantic-spacingHor-global-sm', value: '8px', size: 8, usage: 'Small spacing' },
                    { token: 'semantic-spacingHor-global-md', value: '10px', size: 10, usage: 'Medium spacing' },
                    { token: 'semantic-spacingHor-global-lg', value: '12px', size: 12, usage: 'Large spacing' },
                    { token: 'semantic-spacingHor-global-xl', value: '16px', size: 16, usage: 'Extra large' },
                    { token: 'semantic-spacingHor-global-xxl', value: '20px', size: 20, usage: 'Extra extra large' },
                    { token: 'semantic-spacingHor-global-xxxl', value: '24px', size: 24, usage: 'Extra extra extra large' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="primary"
                          style={{ width: `${item.size}px`, height: '20px', minWidth: '2px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
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
            
            {/* Global Sizes */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Global Sizes</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-size-global-none', value: '0px', size: 0, usage: 'No size' },
                    { token: 'semantic-size-global-xxxs', value: '2px', size: 2, usage: 'Extra extra extra small' },
                    { token: 'semantic-size-global-xxs', value: '4px', size: 4, usage: 'Extra extra small' },
                    { token: 'semantic-size-global-xs', value: '6px', size: 6, usage: 'Extra small' },
                    { token: 'semantic-size-global-sm', value: '8px', size: 8, usage: 'Small size' },
                    { token: 'semantic-size-global-md', value: '10px', size: 10, usage: 'Medium size' },
                    { token: 'semantic-size-global-lg', value: '12px', size: 12, usage: 'Large size' },
                    { token: 'semantic-size-global-xl', value: '16px', size: 16, usage: 'Extra large' },
                    { token: 'semantic-size-global-xxl', value: '20px', size: 20, usage: 'Extra extra large' },
                    { token: 'semantic-size-global-xxxl', value: '24px', size: 24, usage: 'Extra extra extra large' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          borderRadius="sm"
                          style={{ width: `${item.size}px`, height: `${item.size}px`, minWidth: '2px', minHeight: '2px' }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Icon Sizes */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Icon Sizes</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-size-icon-xs', value: '16px', size: 16, usage: 'Extra small icons' },
                    { token: 'semantic-size-icon-sm', value: '20px', size: 20, usage: 'Small icons' },
                    { token: 'semantic-size-icon-md', value: '24px', size: 24, usage: 'Medium icons' },
                    { token: 'semantic-size-icon-lg', value: '32px', size: 32, usage: 'Large icons' },
                    { token: 'semantic-size-icon-xl', value: '40px', size: 40, usage: 'Extra large icons' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          borderRadius="sm"
                          style={{ width: `${item.size}px`, height: `${item.size}px` }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Shape Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🔄 Shape Tokens
            </Text>
            
            {/* Border Radius */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Border Radius</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-radius-global-none', value: '0px', radius: 0, usage: 'No radius' },
                    { token: 'semantic-radius-global-sm', value: '2px', radius: 2, usage: 'Small radius' },
                    { token: 'semantic-radius-global-md', value: '4px', radius: 4, usage: 'Medium radius' },
                    { token: 'semantic-radius-global-lg', value: '6px', radius: 6, usage: 'Large radius' },
                    { token: 'semantic-radius-global-xl', value: '8px', radius: 8, usage: 'Extra large radius' },
                    { token: 'semantic-radius-global-xxl', value: '10px', radius: 10, usage: 'Extra extra large radius' },
                    { token: 'semantic-radius-global-circular', value: '10000px', radius: 9999, usage: 'Circular shape' },
                    { token: 'semantic-radius-global-pill', value: '10000px', radius: 9999, usage: 'Pill shape' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          style={{ 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: item.radius === 9999 ? '50%' : `${item.radius}px`
                          }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Component Specific Radius */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Component Specific Radius</Text>
              <Box backgroundColor="background" borderRadius="md" borderWidth="thin" borderColor="secondary">
                <Stack spacing="none">
                  <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                    <Grid columns={4} gap="md">
                      <Text variant="label-1" weight="bold">Token</Text>
                      <Text variant="label-1" weight="bold">Value</Text>
                      <Text variant="label-1" weight="bold">Preview</Text>
                      <Text variant="label-1" weight="bold">Usage</Text>
                    </Grid>
                  </Box>
                  
                  {[
                    { token: 'semantic-shape-radius-button-sm', value: '2px', radius: 2, usage: 'Small button radius' },
                    { token: 'semantic-shape-radius-button-md', value: '4px', radius: 4, usage: 'Medium button radius' },
                    { token: 'semantic-shape-radius-button-lg', value: '6px', radius: 6, usage: 'Large button radius' },
                    { token: 'semantic-shape-radius-card', value: '4px', radius: 4, usage: 'Card radius' },
                    { token: 'semantic-shape-radius-input', value: '4px', radius: 4, usage: 'Input field radius' },
                    { token: 'semantic-shape-radius-badge-default', value: '2px', radius: 2, usage: 'Default badge radius' },
                    { token: 'semantic-shape-radius-badge-pill', value: '10000px', radius: 9999, usage: 'Pill badge radius' },
                    { token: 'semantic-shape-radius-avatar', value: '10000px', radius: 9999, usage: 'Avatar radius' },
                    { token: 'semantic-shape-radius-popover', value: '6px', radius: 6, usage: 'Popover radius' },
                    { token: 'semantic-shape-radius-modal', value: '6px', radius: 6, usage: 'Modal radius' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={4} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Box 
                          backgroundColor="secondary"
                          style={{ 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: item.radius === 9999 ? '50%' : `${item.radius}px`
                          }}
                        />
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Animation Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              ⚡ Animation Tokens
            </Text>
            
            {/* Duration */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Animation Duration</Text>
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
                    { token: 'semantic-animation-duration-global-instant', value: '100ms', usage: 'Instant animations' },
                    { token: 'semantic-animation-duration-global-fast', value: '200ms', usage: 'Fast animations' },
                    { token: 'semantic-animation-duration-global-normal', value: '300ms', usage: 'Normal animations' },
                    { token: 'semantic-animation-duration-global-slow', value: '500ms', usage: 'Slow animations' },
                    { token: 'semantic-animation-duration-global-slower', value: '700ms', usage: 'Slower animations' },
                    { token: 'semantic-animation-duration-transition-button', value: '200ms', usage: 'Button transitions' },
                    { token: 'semantic-animation-duration-transition-card', value: '300ms', usage: 'Card transitions' },
                    { token: 'semantic-animation-duration-transition-modal-enter', value: '300ms', usage: 'Modal enter animation' },
                    { token: 'semantic-animation-duration-transition-modal-exit', value: '200ms', usage: 'Modal exit animation' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* Easing */}
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Animation Easing</Text>
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
                    { token: 'semantic-animation-easing-global-default', value: 'cubic-bezier(0.4, 0.0, 0.2, 1)', usage: 'Default easing' },
                    { token: 'semantic-animation-easing-global-enter', value: 'cubic-bezier(0.0, 0.0, 0.2, 1)', usage: 'Enter animations' },
                    { token: 'semantic-animation-easing-global-exit', value: 'cubic-bezier(0.4, 0.0, 1, 1)', usage: 'Exit animations' },
                    { token: 'semantic-animation-easing-global-emphasis', value: 'cubic-bezier(0.2, 0.0, 0.0, 1)', usage: 'Emphasized animations' },
                    { token: 'semantic-animation-easing-interaction-button', value: 'cubic-bezier(0.0, 0.0, 0.2, 1)', usage: 'Button interactions' },
                    { token: 'semantic-animation-easing-interaction-card', value: 'cubic-bezier(0.4, 0.0, 0.2, 1)', usage: 'Card interactions' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Elevation Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              📚 Elevation Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Z-Index Levels</Text>
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
                    { token: 'semantic-elevation-z-base', value: '0', usage: 'Base level' },
                    { token: 'semantic-elevation-z-raised', value: '100', usage: 'Raised elements' },
                    { token: 'semantic-elevation-z-navigation', value: '200', usage: 'Navigation elements' },
                    { token: 'semantic-elevation-z-header', value: '300', usage: 'Header elements' },
                    { token: 'semantic-elevation-z-dropdown', value: '400', usage: 'Dropdown menus' },
                    { token: 'semantic-elevation-z-sticky', value: '500', usage: 'Sticky elements' },
                    { token: 'semantic-elevation-z-overlay', value: '600', usage: 'Overlay elements' },
                    { token: 'semantic-elevation-z-modal', value: '700', usage: 'Modal dialogs' },
                    { token: 'semantic-elevation-z-toast', value: '800', usage: 'Toast notifications' },
                    { token: 'semantic-elevation-z-popover', value: '900', usage: 'Popover elements' },
                    { token: 'semantic-elevation-z-tooltip', value: '1000', usage: 'Tooltip elements' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

          </Stack>

          {/* Focus & Interaction Tokens */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">
              🎯 Focus & Interaction Tokens
            </Text>
            
            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Focus Styles</Text>
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
                    { token: 'semantic-focus-outline-width', value: '2px', usage: 'Focus outline width' },
                    { token: 'semantic-focus-outline-style', value: 'solid', usage: 'Focus outline style' },
                    { token: 'semantic-focus-outline-color', value: '#2196F3', usage: 'Focus outline color' },
                    { token: 'semantic-focus-outline-offset', value: '2px', usage: 'Focus outline offset' },
                    { token: 'semantic-focus-ring-width', value: '2px', usage: 'Focus ring width' },
                    { token: 'semantic-focus-ring-color', value: '#2196F3', usage: 'Focus ring color' },
                    { token: 'semantic-focus-ring-offset', value: '2px', usage: 'Focus ring offset' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
                      </Grid>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            <Stack spacing="md">
              <Text variant="heading-2" weight="bold">Opacity States</Text>
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
                    { token: 'semantic-opacity-hover', value: '0.8', usage: 'Hover state opacity' },
                    { token: 'semantic-opacity-disabled', value: '0.4', usage: 'Disabled state opacity' },
                    { token: 'semantic-opacity-overlay-light', value: '0.2', usage: 'Light overlay opacity' },
                    { token: 'semantic-opacity-overlay-medium', value: '0.4', usage: 'Medium overlay opacity' },
                    { token: 'semantic-opacity-overlay-heavy', value: '0.6', usage: 'Heavy overlay opacity' },
                  ].map((item, index) => (
                    <Box key={item.token} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                      <Grid columns={3} gap="md">
                        <Text variant="body-2" weight="bold" style={{ fontSize: '10px' }}>{item.token}</Text>
                        <Text variant="caption-2">{item.value}</Text>
                        <Text variant="caption-1" color="secondary">{item.usage}</Text>
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