'use client'

import { Box, Stack, Grid, Text, Button } from 'lumir-design-components'
import 'lumir-design-components/styles'
import 'lumir-design-tokens/css'
import Link from 'next/link'
import { useState } from 'react'

export default function CompoundComponentsPage() {
  const [selectedVariant, setSelectedVariant] = useState('filled')
  const [selectedColorScheme, setSelectedColorScheme] = useState('primary')
  const [selectedSize, setSelectedSize] = useState('md')

  return (
    <Box backgroundColor="background" padding="xl" minHeight="100vh">
      <Box maxWidth="1200px" style={{ margin: '0 auto' }}>
        
        <Stack spacing="xl">
          {/* 페이지 제목 */}
          <Stack spacing="md" align="center">
            <Text variant="hero-1" weight="bold" align="center">
              🔘 Compound 컴포넌트
            </Text>
            <Text variant="body-1" color="secondary" align="center">
              여러 프리미티브 컴포넌트를 조합하여 만든 복합 컴포넌트들입니다. 현재 Button 컴포넌트를 제공합니다.
            </Text>
            <Link href="/">
              <Button variant="outlined" colorScheme="secondary" size="sm">
                ← 메인으로 돌아가기
              </Button>
            </Link>
          </Stack>

          {/* Button 컴포넌트 */}
          <Stack spacing="lg">
            <Stack spacing="md">
              <Text variant="title-1" weight="bold">
                🔘 Button 컴포넌트
              </Text>
              <Text variant="body-1" color="secondary">
                다양한 스타일과 크기의 버튼 컴포넌트입니다. 사용자 인터랙션을 위한 핵심 컴포넌트입니다.
              </Text>
            </Stack>

            {/* Interactive Button Builder */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  인터랙티브 Button 빌더
                </Text>
                <Grid columns={2} gap="xl">
                  <Stack spacing="lg">
                    {/* Variant Control */}
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Variant</Text>
                      <Stack direction="row" spacing="sm">
                        {['filled', 'outlined', 'transparent'].map((variant) => (
                          <Button
                            key={variant}
                            variant={selectedVariant === variant ? "filled" : "outlined"}
                            colorScheme="primary"
                            size="sm"
                            onClick={() => setSelectedVariant(variant)}
                          >
                            {variant}
                          </Button>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Color Scheme Control */}
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Color Scheme</Text>
                      <Stack direction="row" spacing="sm">
                        {['primary', 'secondary'].map((colorScheme) => (
                          <Button
                            key={colorScheme}
                            variant={selectedColorScheme === colorScheme ? "filled" : "outlined"}
                            colorScheme="primary"
                            size="sm"
                            onClick={() => setSelectedColorScheme(colorScheme)}
                          >
                            {colorScheme}
                          </Button>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Size Control */}
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Size</Text>
                      <Stack direction="row" spacing="sm">
                        {['xsm', 'sm', 'md', 'lg', 'xlg'].map((size) => (
                          <Button
                            key={size}
                            variant={selectedSize === size ? "filled" : "outlined"}
                            colorScheme="primary"
                            size="sm"
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </Button>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">결과 미리보기</Text>
                    <Box backgroundColor="background" padding="xl" borderRadius="md" borderWidth="thin" borderColor="primary">
                      <Stack spacing="none" align="center" justify="center" style={{ height: '120px' }}>
                        <Button 
                          variant={selectedVariant as any}
                          colorScheme={selectedColorScheme as any}
                          size={selectedSize as any}
                        >
                          Sample Button
                        </Button>
                      </Stack>
                    </Box>
                    <Box backgroundColor="primary" padding="sm" borderRadius="sm">
                      <Text variant="caption-1" weight="bold" color="onColor" align="center">
                        variant="{selectedVariant}" colorScheme="{selectedColorScheme}" size="{selectedSize}"
                      </Text>
                    </Box>
                  </Stack>
                </Grid>
              </Stack>
            </Box>

            {/* Button Variants */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Button Variants
                </Text>
                <Text variant="body-1" color="secondary">
                  버튼의 다양한 스타일 변형을 확인해보세요.
                </Text>
                <Grid columns={3} gap="lg">
                  <Stack spacing="md" align="center">
                    <Text variant="heading-3" weight="medium">Filled</Text>
                    <Text variant="body-2" color="secondary" align="center">
                      가장 강조되는 주요 액션에 사용
                    </Text>
                    <Stack spacing="sm">
                      <Button variant="filled" colorScheme="primary" size="md">Primary</Button>
                      <Button variant="filled" colorScheme="secondary" size="md">Secondary</Button>
                    </Stack>
                  </Stack>
                  <Stack spacing="md" align="center">
                    <Text variant="heading-3" weight="medium">Outlined</Text>
                    <Text variant="body-2" color="secondary" align="center">
                      보조 액션이나 덜 중요한 버튼에 사용
                    </Text>
                    <Stack spacing="sm">
                      <Button variant="outlined" colorScheme="primary" size="md">Primary</Button>
                      <Button variant="outlined" colorScheme="secondary" size="md">Secondary</Button>
                    </Stack>
                  </Stack>
                  <Stack spacing="md" align="center">
                    <Text variant="heading-3" weight="medium">Transparent</Text>
                    <Text variant="body-2" color="secondary" align="center">
                      최소한의 스타일로 텍스트 링크처럼 사용
                    </Text>
                    <Stack spacing="sm">
                      <Button variant="transparent" colorScheme="primary" size="md">Primary</Button>
                      <Button variant="transparent" colorScheme="secondary" size="md">Secondary</Button>
                    </Stack>
                  </Stack>
                </Grid>
              </Stack>
            </Box>

            {/* Button Sizes */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Button Sizes
                </Text>
                <Text variant="body-1" color="secondary">
                  다양한 크기의 버튼을 상황에 맞게 사용할 수 있습니다.
                </Text>
                <Stack direction="row" spacing="lg" justify="center" align="center">
                  <Stack spacing="sm" align="center">
                    <Button variant="filled" colorScheme="primary" size="xsm">XS</Button>
                    <Text variant="caption-2" color="secondary">xsm</Text>
                  </Stack>
                  <Stack spacing="sm" align="center">
                    <Button variant="filled" colorScheme="primary" size="sm">Small</Button>
                    <Text variant="caption-2" color="secondary">sm</Text>
                  </Stack>
                  <Stack spacing="sm" align="center">
                    <Button variant="filled" colorScheme="primary" size="md">Medium</Button>
                    <Text variant="caption-2" color="secondary">md</Text>
                  </Stack>
                  <Stack spacing="sm" align="center">
                    <Button variant="filled" colorScheme="primary" size="lg">Large</Button>
                    <Text variant="caption-2" color="secondary">lg</Text>
                  </Stack>
                  <Stack spacing="sm" align="center">
                    <Button variant="filled" colorScheme="primary" size="xlg">XL</Button>
                    <Text variant="caption-2" color="secondary">xlg</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>

            {/* Button States */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Button States
                </Text>
                <Text variant="body-1" color="secondary">
                  버튼의 다양한 상태를 확인해보세요. (실제 상호작용은 호버/클릭 시 확인 가능)
                </Text>
                <Grid columns={2} gap="xl">
                  <Stack spacing="lg">
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Primary Button States</Text>
                      <Stack spacing="sm">
                        <Stack direction="row" spacing="md" align="center">
                          <Button variant="filled" colorScheme="primary" size="md">Normal</Button>
                          <Text variant="body-2" color="secondary">기본 상태</Text>
                        </Stack>
                        <Stack direction="row" spacing="md" align="center">
                          <Button variant="filled" colorScheme="primary" size="md" style={{ opacity: 0.8 }}>Hovered</Button>
                          <Text variant="body-2" color="secondary">호버 상태 (시뮬레이션)</Text>
                        </Stack>
                        <Stack direction="row" spacing="md" align="center">
                          <Button variant="filled" colorScheme="primary" size="md" style={{ opacity: 0.6 }}>Pressed</Button>
                          <Text variant="body-2" color="secondary">눌림 상태 (시뮬레이션)</Text>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack spacing="lg">
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Secondary Button States</Text>
                      <Stack spacing="sm">
                        <Stack direction="row" spacing="md" align="center">
                          <Button variant="outlined" colorScheme="secondary" size="md">Normal</Button>
                          <Text variant="body-2" color="secondary">기본 상태</Text>
                        </Stack>
                        <Stack direction="row" spacing="md" align="center">
                          <Button variant="outlined" colorScheme="secondary" size="md" style={{ opacity: 0.8 }}>Hovered</Button>
                          <Text variant="body-2" color="secondary">호버 상태 (시뮬레이션)</Text>
                        </Stack>
                        <Stack direction="row" spacing="md" align="center">
                          <Button variant="outlined" colorScheme="secondary" size="md" style={{ opacity: 0.6 }}>Pressed</Button>
                          <Text variant="body-2" color="secondary">눌림 상태 (시뮬레이션)</Text>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Stack>
            </Box>

            {/* Button Usage Examples */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Button 사용 예시
                </Text>
                <Text variant="body-1" color="secondary">
                  실제 UI에서 버튼이 어떻게 사용되는지 확인해보세요.
                </Text>
                
                <Stack spacing="lg">
                  {/* 카드 액션 예시 */}
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">카드 액션 버튼</Text>
                    <Grid columns={3} gap="lg">
                      {Array.from({ length: 3 }, (_, i) => (
                        <Box key={i} backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                          <Stack spacing="md">
                            <Text variant="heading-3" weight="bold">제품 {i + 1}</Text>
                            <Text variant="body-2" color="secondary">
                              제품에 대한 간단한 설명이 여기에 들어갑니다.
                            </Text>
                            <Stack direction="row" spacing="sm">
                              <Button variant="filled" colorScheme="primary" size="sm">
                                구매하기
                              </Button>
                              <Button variant="outlined" colorScheme="secondary" size="sm">
                                자세히 보기
                              </Button>
                            </Stack>
                          </Stack>
                        </Box>
                      ))}
                    </Grid>
                  </Stack>

                  {/* 폼 액션 예시 */}
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">폼 액션 버튼</Text>
                    <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                      <Stack spacing="lg">
                        <Text variant="heading-3" weight="bold">회원가입</Text>
                        <Stack spacing="md">
                          <Box backgroundColor="surface" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                            <Text variant="body-2" color="secondary">이메일 입력 필드</Text>
                          </Box>
                          <Box backgroundColor="surface" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                            <Text variant="body-2" color="secondary">비밀번호 입력 필드</Text>
                          </Box>
                          <Box backgroundColor="surface" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                            <Text variant="body-2" color="secondary">비밀번호 확인 필드</Text>
                          </Box>
                        </Stack>
                        <Stack direction="row" spacing="md" justify="space-between">
                          <Button variant="transparent" colorScheme="secondary" size="md">
                            취소
                          </Button>
                          <Stack direction="row" spacing="sm">
                            <Button variant="outlined" colorScheme="secondary" size="md">
                              초기화
                            </Button>
                            <Button variant="filled" colorScheme="primary" size="md">
                              가입하기
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>

                  {/* 네비게이션 버튼 예시 */}
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">네비게이션 버튼</Text>
                    <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                      <Stack spacing="lg">
                        <Stack direction="row" spacing="lg" align="center" justify="space-between">
                          <Text variant="heading-2" weight="bold">페이지 제목</Text>
                          <Stack direction="row" spacing="sm">
                            <Button variant="transparent" colorScheme="secondary" size="sm">
                              설정
                            </Button>
                            <Button variant="outlined" colorScheme="primary" size="sm">
                              내보내기
                            </Button>
                            <Button variant="filled" colorScheme="primary" size="sm">
                              새로 만들기
                            </Button>
                          </Stack>
                        </Stack>
                        
                        <Box backgroundColor="surface" padding="xl" borderRadius="md">
                          <Stack spacing="none" align="center" justify="center" style={{ height: '100px' }}>
                            <Text variant="body-1" color="secondary">페이지 콘텐츠 영역</Text>
                          </Stack>
                        </Box>
                        
                        <Stack direction="row" spacing="md" justify="space-between" align="center">
                          <Button variant="outlined" colorScheme="secondary" size="md">
                            ← 이전
                          </Button>
                          <Stack direction="row" spacing="xs">
                            <Button variant="transparent" colorScheme="secondary" size="sm">1</Button>
                            <Button variant="filled" colorScheme="primary" size="sm">2</Button>
                            <Button variant="transparent" colorScheme="secondary" size="sm">3</Button>
                            <Button variant="transparent" colorScheme="secondary" size="sm">4</Button>
                            <Button variant="transparent" colorScheme="secondary" size="sm">5</Button>
                          </Stack>
                          <Button variant="outlined" colorScheme="secondary" size="md">
                            다음 →
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>

                  {/* 액션 그룹 예시 */}
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">액션 그룹</Text>
                    <Grid columns={2} gap="lg">
                      <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                        <Stack spacing="md">
                          <Text variant="heading-3" weight="bold">파일 관리</Text>
                          <Stack spacing="sm">
                            <Button variant="filled" colorScheme="primary" size="md" style={{ width: '100%' }}>
                              📁 새 폴더
                            </Button>
                            <Button variant="outlined" colorScheme="secondary" size="md" style={{ width: '100%' }}>
                              📄 파일 업로드
                            </Button>
                            <Button variant="outlined" colorScheme="secondary" size="md" style={{ width: '100%' }}>
                              📋 복사
                            </Button>
                            <Button variant="transparent" colorScheme="secondary" size="md" style={{ width: '100%' }}>
                              🗑️ 삭제
                            </Button>
                          </Stack>
                        </Stack>
                      </Box>
                      
                      <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                        <Stack spacing="md">
                          <Text variant="heading-3" weight="bold">소셜 액션</Text>
                          <Stack direction="row" spacing="sm" justify="center">
                            <Button variant="filled" colorScheme="primary" size="sm">
                              👍 좋아요
                            </Button>
                            <Button variant="outlined" colorScheme="secondary" size="sm">
                              💬 댓글
                            </Button>
                            <Button variant="outlined" colorScheme="secondary" size="sm">
                              📤 공유
                            </Button>
                          </Stack>
                          <Stack direction="row" spacing="sm" justify="center">
                            <Button variant="transparent" colorScheme="secondary" size="sm">
                              🔖 저장
                            </Button>
                            <Button variant="transparent" colorScheme="secondary" size="sm">
                              📊 통계
                            </Button>
                            <Button variant="transparent" colorScheme="secondary" size="sm">
                              ⚙️ 설정
                            </Button>
                          </Stack>
                        </Stack>
                      </Box>
                    </Grid>
                  </Stack>
                </Stack>
              </Stack>
            </Box>

            {/* Button Best Practices */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Button 사용 가이드라인
                </Text>
                <Grid columns={2} gap="xl">
                  <Stack spacing="lg">
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium" color="primary">✅ 권장사항</Text>
                      <Stack spacing="sm">
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="primary">
                          <Text variant="body-2">• 주요 액션에는 Filled 버튼 사용</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="primary">
                          <Text variant="body-2">• 보조 액션에는 Outlined 버튼 사용</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="primary">
                          <Text variant="body-2">• 텍스트 링크에는 Transparent 버튼 사용</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="primary">
                          <Text variant="body-2">• 명확하고 간결한 버튼 텍스트 사용</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="primary">
                          <Text variant="body-2">• 적절한 크기와 간격 유지</Text>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                  
                  <Stack spacing="lg">
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium" color="secondary">❌ 주의사항</Text>
                      <Stack spacing="sm">
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                          <Text variant="body-2">• 한 화면에 너무 많은 Primary 버튼 사용 금지</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                          <Text variant="body-2">• 모호하거나 긴 버튼 텍스트 사용 금지</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                          <Text variant="body-2">• 일관성 없는 버튼 크기 사용 금지</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                          <Text variant="body-2">• 중요도와 맞지 않는 스타일 사용 금지</Text>
                        </Box>
                        <Box backgroundColor="background" padding="md" borderRadius="sm" borderWidth="thin" borderColor="secondary">
                          <Text variant="body-2">• 접근성을 고려하지 않은 색상 사용 금지</Text>
                        </Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              </Stack>
            </Box>
          </Stack>

        </Stack>

      </Box>
    </Box>
  )
} 