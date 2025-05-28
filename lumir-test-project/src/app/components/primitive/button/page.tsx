'use client'

import { useState } from 'react'
import { Box, Stack, Grid, Text, Button } from 'lumir-design-components'
import type { ButtonProps } from 'lumir-design-components'
import 'lumir-design-components/styles'
import 'lumir-design-tokens/css'
import Link from 'next/link'

// 코드 블록 컴포넌트
const CodePreview = ({ children }: { children: string }) => (
  <Box
    backgroundColor="surface"
    padding="lg"
    borderRadius="md"
    borderWidth="thin"
    borderColor="secondary"
  >
    <Text
      variant="caption-2"
      style={{
        fontFamily: 'monospace',
        whiteSpace: 'pre',
        color: 'var(--semantic-color-secondary-foreground-1-rest)'
      }}
    >
      {children}
    </Text>
  </Box>
)

export default function ButtonPage() {
  // 플레이그라운드 상태 관리
  const [variant, setVariant] = useState<ButtonProps['variant']>('filled')
  const [colorScheme, setColorScheme] = useState<ButtonProps['colorScheme']>('primary')
  const [size, setSize] = useState<ButtonProps['size']>('md')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 현재 설정에 따른 코드 생성
  const generateCode = () => {
    const props = []
    if (variant !== 'filled') props.push(`variant="${variant}"`)
    if (colorScheme !== 'primary') props.push(`colorScheme="${colorScheme}"`)
    if (size !== 'md') props.push(`size="${size}"`)
    if (isDisabled) props.push('disabled')
    if (isLoading) props.push('isLoading')

    return `<Button ${props.join(' ')}>
  Button Text
</Button>`
  }

  return (
    <Box backgroundColor="background" padding="xl" minHeight="100vh">
      <Box maxWidth="1200px" style={{ margin: '0 auto' }}>
        <Stack spacing="xl">
          {/* 페이지 제목 */}
          <Stack spacing="md" align="center">
            <Text variant="hero-1" weight="bold" align="center">
              Button
            </Text>
            <Text variant="body-1" color="secondary" align="center">
              사용자의 행동을 유도하는 기본적인 상호작용 요소입니다.
            </Text>
            <Link href="/components">
              <Button variant="outlined" colorScheme="secondary">
                ← 컴포넌트 목록으로
              </Button>
            </Link>
          </Stack>

          {/* Import */}
          <Stack spacing="md">
            <Text variant="title-1" weight="bold">Import</Text>
            <CodePreview>{"import { Button } from 'lumir-design-components'"}</CodePreview>
          </Stack>

          {/* 기본 사용법 */}
          <Stack spacing="md">
            <Text variant="title-1" weight="bold">기본 사용법</Text>
            <Text variant="body-1">
              Button 컴포넌트는 다양한 스타일과 상태를 지원합니다.
            </Text>
            <Grid columns={4} gap="md">
              <Button>Default Button</Button>
              <Button variant="outlined">Outlined Button</Button>
              <Button variant="transparent">Transparent Button</Button>
              <Button variant="outlined">Text Button</Button>
            </Grid>
            <CodePreview>{"<Button>Default Button</Button>\n<Button variant=\"outlined\">Outlined Button</Button>\n<Button variant=\"transparent\">Transparent Button</Button>\n<Button variant=\"outlined\">Text Button</Button>"}</CodePreview>
          </Stack>

          {/* Color Schemes */}
          <Stack spacing="md">
            <Text variant="title-1" weight="bold">Color Schemes</Text>
            <Text variant="body-1">
              다양한 색상 스키마를 지원하여 상황에 맞는 버튼을 사용할 수 있습니다.
            </Text>
            <Grid columns={3} gap="md">
              <Button colorScheme="primary">Primary</Button>
              <Button colorScheme="secondary">Secondary</Button>
              <Button colorScheme="cta">CTA</Button>
            </Grid>
            <CodePreview>{"<Button colorScheme=\"primary\">Primary</Button>\n<Button colorScheme=\"secondary\">Secondary</Button>\n<Button colorScheme=\"cta\">CTA</Button>"}</CodePreview>
          </Stack>

          {/* Sizes */}
          <Stack spacing="md">
            <Text variant="title-1" weight="bold">Sizes</Text>
            <Text variant="body-1">
              상황에 맞는 다양한 크기를 지원합니다.
            </Text>
            <Grid columns={3} gap="md">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Grid>
            <CodePreview>{"<Button size=\"sm\">Small</Button>\n<Button size=\"md\">Medium</Button>\n<Button size=\"lg\">Large</Button>"}</CodePreview>
          </Stack>

          {/* States */}
          <Stack spacing="md">
            <Text variant="title-1" weight="bold">States</Text>
            <Text variant="body-1">
              버튼의 다양한 상태를 지원합니다.
            </Text>
            <Grid columns={4} gap="md">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
              <Button leftIcon="🚀">With Icon</Button>
            </Grid>
            <CodePreview>{"<Button>Normal</Button>\n<Button disabled>Disabled</Button>\n<Button isLoading>Loading</Button>\n<Button leftIcon=\"🚀\">With Icon</Button>"}</CodePreview>
          </Stack>

          {/* Playground */}
          <Stack spacing="lg">
            <Text variant="title-1" weight="bold">Playground</Text>
            <Text variant="body-1">
              다양한 옵션을 조합하여 버튼을 커스터마이징해보세요.
            </Text>
            
            {/* Controls */}
            <Grid columns={2} gap="md">
              <Stack spacing="sm">
                <Text variant="label-1">Variant</Text>
                <Box 
                  backgroundColor="surface" 
                  padding="sm" 
                  borderRadius="md"
                  borderWidth="thin"
                  borderColor="secondary"
                >
                  <Grid columns={3} gap="sm">
                    <Button 
                      size="sm" 
                      variant={variant === 'filled' ? 'filled' : 'outlined'}
                      onClick={() => setVariant('filled')}
                    >
                      Filled
                    </Button>
                    <Button 
                      size="sm" 
                      variant={variant === 'outlined' ? 'filled' : 'outlined'}
                      onClick={() => setVariant('outlined')}
                    >
                      Outlined
                    </Button>
                    <Button 
                      size="sm" 
                      variant={variant === 'transparent' ? 'filled' : 'outlined'}
                      onClick={() => setVariant('transparent')}
                    >
                      Transparent
                    </Button>
                  </Grid>
                </Box>
              </Stack>
              <Stack spacing="sm">
                <Text variant="label-1">Color Scheme</Text>
                <Box 
                  backgroundColor="surface" 
                  padding="sm" 
                  borderRadius="md"
                  borderWidth="thin"
                  borderColor="secondary"
                >
                  <Grid columns={3} gap="sm">
                    <Button 
                      size="sm" 
                      variant={colorScheme === 'primary' ? 'filled' : 'outlined'}
                      onClick={() => setColorScheme('primary')}
                    >
                      Primary
                    </Button>
                    <Button 
                      size="sm" 
                      variant={colorScheme === 'secondary' ? 'filled' : 'outlined'}
                      onClick={() => setColorScheme('secondary')}
                    >
                      Secondary
                    </Button>
                    <Button 
                      size="sm" 
                      variant={colorScheme === 'cta' ? 'filled' : 'outlined'}
                      onClick={() => setColorScheme('cta')}
                    >
                      CTA
                    </Button>
                  </Grid>
                </Box>
              </Stack>
              <Stack spacing="sm">
                <Text variant="label-1">Size</Text>
                <Box 
                  backgroundColor="surface" 
                  padding="sm" 
                  borderRadius="md"
                  borderWidth="thin"
                  borderColor="secondary"
                >
                  <Grid columns={3} gap="sm">
                    <Button 
                      size="sm" 
                      variant={size === 'sm' ? 'filled' : 'outlined'}
                      onClick={() => setSize('sm')}
                    >
                      Small
                    </Button>
                    <Button 
                      size="sm" 
                      variant={size === 'md' ? 'filled' : 'outlined'}
                      onClick={() => setSize('md')}
                    >
                      Medium
                    </Button>
                    <Button 
                      size="sm" 
                      variant={size === 'lg' ? 'filled' : 'outlined'}
                      onClick={() => setSize('lg')}
                    >
                      Large
                    </Button>
                  </Grid>
                </Box>
              </Stack>
              <Stack spacing="sm">
                <Text variant="label-1">States</Text>
                <Box 
                  backgroundColor="surface" 
                  padding="sm" 
                  borderRadius="md"
                  borderWidth="thin"
                  borderColor="secondary"
                >
                  <Grid columns={2} gap="sm">
                    <Button 
                      variant={isDisabled ? 'filled' : 'outlined'} 
                      size="sm"
                      onClick={() => setIsDisabled(!isDisabled)}
                    >
                      {isDisabled ? 'Disabled ✓' : 'Disabled'}
                    </Button>
                    <Button 
                      variant={isLoading ? 'filled' : 'outlined'}
                      size="sm"
                      onClick={() => setIsLoading(!isLoading)}
                    >
                      {isLoading ? 'Loading ✓' : 'Loading'}
                    </Button>
                  </Grid>
                </Box>
              </Stack>
            </Grid>

            {/* Preview */}
            <Box 
              padding="xl" 
              backgroundColor="surface" 
              borderRadius="md" 
              borderWidth="thin" 
              borderColor="secondary"
            >
              <Stack spacing="lg">
                <Button
                  variant={variant}
                  colorScheme={colorScheme}
                  size={size}
                  disabled={isDisabled}
                  isLoading={isLoading}
                >
                  Button Text
                </Button>
                <CodePreview>{generateCode()}</CodePreview>
              </Stack>
            </Box>
          </Stack>

          {/* Props */}
          <Stack spacing="md">
            <Text variant="title-1" weight="bold">Props</Text>
            <Box backgroundColor="surface" borderRadius="md" borderWidth="thin" borderColor="secondary">
              <Stack spacing="none">
                <Box backgroundColor="surface" padding="md" style={{ borderBottom: '1px solid var(--semantic-color-secondary-stroke-1-rest)' }}>
                  <Grid columns={4} gap="md">
                    <Text variant="label-1" weight="bold">Prop</Text>
                    <Text variant="label-1" weight="bold">Type</Text>
                    <Text variant="label-1" weight="bold">Default</Text>
                    <Text variant="label-1" weight="bold">Description</Text>
                  </Grid>
                </Box>
                {[
                  { 
                    prop: 'variant', 
                    type: "'filled' | 'outlined' | 'transparent'", 
                    default: "'filled'",
                    description: '버튼의 시각적 스타일을 지정합니다.' 
                  },
                  { 
                    prop: 'colorScheme', 
                    type: "'primary' | 'secondary' | 'cta'", 
                    default: "'primary'",
                    description: '버튼의 색상 스키마를 지정합니다.' 
                  },
                  { 
                    prop: 'size', 
                    type: "'sm' | 'md' | 'lg'", 
                    default: "'md'",
                    description: '버튼의 크기를 지정합니다.' 
                  },
                  { 
                    prop: 'disabled', 
                    type: 'boolean', 
                    default: 'false',
                    description: '버튼의 비활성화 상태를 지정합니다.' 
                  },
                  { 
                    prop: 'isLoading', 
                    type: 'boolean', 
                    default: 'false',
                    description: '버튼의 로딩 상태를 지정합니다.' 
                  },
                  { 
                    prop: 'leftIcon', 
                    type: 'ReactNode', 
                    default: 'undefined',
                    description: '버튼 왼쪽에 표시될 아이콘을 지정합니다.' 
                  },
                  { 
                    prop: 'rightIcon', 
                    type: 'ReactNode', 
                    default: 'undefined',
                    description: '버튼 오른쪽에 표시될 아이콘을 지정합니다.' 
                  },
                ].map((item, index) => (
                  <Box key={item.prop} padding="md" backgroundColor={index % 2 === 0 ? "background" : "surface"}>
                    <Grid columns={4} gap="md">
                      <Text variant="body-2" weight="bold">{item.prop}</Text>
                      <Text variant="caption-2" style={{ fontFamily: 'monospace' }}>{item.type}</Text>
                      <Text variant="caption-2" style={{ fontFamily: 'monospace' }}>{item.default}</Text>
                      <Text variant="caption-1" color="secondary">{item.description}</Text>
                    </Grid>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>

        </Stack>
      </Box>
    </Box>
  )
} 