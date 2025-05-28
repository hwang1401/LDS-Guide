'use client'

import { Box, Stack, Grid, Text, Button } from 'lumir-design-components'
import 'lumir-design-components/styles'
import 'lumir-design-tokens/css'
import Link from 'next/link'
import { useState } from 'react'

export default function PrimitiveComponentsPage() {
  const [selectedPadding, setSelectedPadding] = useState('md')
  const [selectedBorderRadius, setSelectedBorderRadius] = useState('md')
  const [selectedShadow, setSelectedShadow] = useState('md')
  const [selectedColumns, setSelectedColumns] = useState(3)

  return (
    <Box backgroundColor="background" padding="xl" minHeight="100vh">
      <Box maxWidth="1200px" style={{ margin: '0 auto' }}>
        
        <Stack spacing="xl">
          {/* 페이지 제목 */}
          <Stack spacing="md" align="center">
            <Text variant="hero-1" weight="bold" align="center">
              📦 Primitive 컴포넌트
            </Text>
            <Text variant="body-1" color="secondary" align="center">
              레이아웃의 기본이 되는 원시 컴포넌트들입니다. Box, Stack, Grid 컴포넌트를 제공합니다.
            </Text>
            <Link href="/">
              <Button variant="outlined" colorScheme="secondary" size="sm">
                ← 메인으로 돌아가기
              </Button>
            </Link>
          </Stack>

          {/* Box 컴포넌트 */}
          <Stack spacing="lg">
            <Stack spacing="md">
              <Text variant="title-1" weight="bold">
                📦 Box 컴포넌트
              </Text>
              <Text variant="body-1" color="secondary">
                레이아웃의 기본이 되는 Box 컴포넌트입니다. 패딩, 마진, 배경색, 테두리 등을 설정할 수 있습니다.
              </Text>
            </Stack>

            {/* Interactive Box Example */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  인터랙티브 Box 빌더
                </Text>
                <Grid columns={2} gap="xl">
                  <Stack spacing="lg">
                    {/* Padding Control */}
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Padding</Text>
                      <Stack direction="row" spacing="sm">
                        {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
                          <Button
                            key={size}
                            variant={selectedPadding === size ? "filled" : "outlined"}
                            colorScheme="primary"
                            size="sm"
                            onClick={() => setSelectedPadding(size)}
                          >
                            {size}
                          </Button>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Border Radius Control */}
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Border Radius</Text>
                      <Stack direction="row" spacing="sm">
                        {['sm', 'md', 'lg', 'xl'].map((size) => (
                          <Button
                            key={size}
                            variant={selectedBorderRadius === size ? "filled" : "outlined"}
                            colorScheme="primary"
                            size="sm"
                            onClick={() => setSelectedBorderRadius(size)}
                          >
                            {size}
                          </Button>
                        ))}
                      </Stack>
                    </Stack>

                    {/* Shadow Control */}
                    <Stack spacing="md">
                      <Text variant="heading-3" weight="medium">Shadow</Text>
                      <Stack direction="row" spacing="sm">
                        {['none', 'sm', 'md', 'lg'].map((size) => (
                          <Button
                            key={size}
                            variant={selectedShadow === size ? "filled" : "outlined"}
                            colorScheme="primary"
                            size="sm"
                            onClick={() => setSelectedShadow(size === 'none' ? 'none' : size)}
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
                      <Box 
                        backgroundColor="primary" 
                        padding={selectedPadding as any}
                        borderRadius={selectedBorderRadius as any}
                        shadow={selectedShadow === 'none' ? undefined : (selectedShadow as any)}
                        borderWidth="thin"
                        borderColor="primary"
                      >
                        <Text variant="body-1" weight="bold" color="onColor" align="center">
                          Box 컴포넌트
                        </Text>
                      </Box>
                    </Box>
                    <Box backgroundColor="primary" padding="sm" borderRadius="sm">
                      <Text variant="caption-1" weight="bold" color="onColor" align="center">
                        padding="{selectedPadding}" borderRadius="{selectedBorderRadius}" shadow="{selectedShadow}"
                      </Text>
                    </Box>
                  </Stack>
                </Grid>
              </Stack>
            </Box>

            {/* Box 사용 예시 */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Box 컴포넌트 사용 예시
                </Text>
                <Grid columns={3} gap="lg">
                  <Stack spacing="md" align="center">
                    <Text variant="heading-3" weight="medium">기본 카드</Text>
                    <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                      <Stack spacing="md">
                        <Text variant="heading-3" weight="bold">카드 제목</Text>
                        <Text variant="body-2" color="secondary">
                          기본적인 카드 레이아웃입니다.
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack spacing="md" align="center">
                    <Text variant="heading-3" weight="medium">강조 카드</Text>
                    <Box backgroundColor="primary" padding="lg" borderRadius="lg" shadow="md">
                      <Stack spacing="md">
                        <Text variant="heading-3" weight="bold" color="onColor">강조 카드</Text>
                        <Text variant="body-2" color="onColor">
                          중요한 내용을 강조하는 카드입니다.
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack spacing="md" align="center">
                    <Text variant="heading-3" weight="medium">둥근 카드</Text>
                    <Box backgroundColor="secondary" padding="lg" borderRadius="xl" shadow="lg">
                      <Stack spacing="md">
                        <Text variant="heading-3" weight="bold" color="onColor">둥근 카드</Text>
                        <Text variant="body-2" color="onColor">
                          부드러운 느낌의 카드입니다.
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              </Stack>
            </Box>
          </Stack>

          {/* Stack 컴포넌트 */}
          <Stack spacing="lg">
            <Stack spacing="md">
              <Text variant="title-1" weight="bold">
                📚 Stack 컴포넌트
              </Text>
              <Text variant="body-1" color="secondary">
                요소들을 수직/수평으로 정렬하고 간격을 조절하는 Stack 컴포넌트입니다.
              </Text>
            </Stack>

            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Stack Direction & Alignment
                </Text>
                <Grid columns={2} gap="xl">
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium" align="center">Vertical Stack</Text>
                    <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="primary">
                      <Stack spacing="md">
                        <Box backgroundColor="primary" padding="md" borderRadius="sm">
                          <Text variant="body-2" weight="bold" color="onColor" align="center">Item 1</Text>
                        </Box>
                        <Box backgroundColor="primary" padding="md" borderRadius="sm">
                          <Text variant="body-2" weight="bold" color="onColor" align="center">Item 2</Text>
                        </Box>
                        <Box backgroundColor="primary" padding="md" borderRadius="sm">
                          <Text variant="body-2" weight="bold" color="onColor" align="center">Item 3</Text>
                        </Box>
                      </Stack>
                    </Box>
                    <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                      <Text variant="caption-1" weight="bold" color="onColor" align="center">
                        direction="column" spacing="md"
                      </Text>
                    </Box>
                  </Stack>
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium" align="center">Horizontal Stack</Text>
                    <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="primary">
                      <Stack direction="row" spacing="md" justify="center">
                        <Box backgroundColor="primary" padding="md" borderRadius="sm">
                          <Text variant="body-2" weight="bold" color="onColor" align="center">A</Text>
                        </Box>
                        <Box backgroundColor="primary" padding="md" borderRadius="sm">
                          <Text variant="body-2" weight="bold" color="onColor" align="center">B</Text>
                        </Box>
                        <Box backgroundColor="primary" padding="md" borderRadius="sm">
                          <Text variant="body-2" weight="bold" color="onColor" align="center">C</Text>
                        </Box>
                      </Stack>
                    </Box>
                    <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                      <Text variant="caption-1" weight="bold" color="onColor" align="center">
                        direction="row" spacing="md"
                      </Text>
                    </Box>
                  </Stack>
                </Grid>
              </Stack>
            </Box>

            {/* Stack Alignment 예시 */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Stack Alignment 옵션
                </Text>
                <Grid columns={3} gap="lg">
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium" align="center">Left Align</Text>
                                         <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                       <Stack spacing="sm">
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Short</Text>
                         </Box>
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Medium Text</Text>
                         </Box>
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Very Long Text Content</Text>
                         </Box>
                       </Stack>
                     </Box>
                  </Stack>
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium" align="center">Center Align</Text>
                                         <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                       <Stack spacing="sm" align="center">
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Short</Text>
                         </Box>
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Medium Text</Text>
                         </Box>
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Very Long Text Content</Text>
                         </Box>
                       </Stack>
                     </Box>
                   </Stack>
                   <Stack spacing="md">
                     <Text variant="heading-3" weight="medium" align="center">Right Align</Text>
                     <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                       <Stack spacing="sm">
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Short</Text>
                         </Box>
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Medium Text</Text>
                         </Box>
                         <Box backgroundColor="secondary" padding="sm" borderRadius="sm">
                           <Text variant="caption-1" weight="bold" color="onColor">Very Long Text Content</Text>
                         </Box>
                       </Stack>
                     </Box>
                  </Stack>
                </Grid>
              </Stack>
            </Box>
          </Stack>

          {/* Grid 컴포넌트 */}
          <Stack spacing="lg">
            <Stack spacing="md">
              <Text variant="title-1" weight="bold">
                🔲 Grid 컴포넌트
              </Text>
              <Text variant="body-1" color="secondary">
                반응형 그리드 레이아웃 컴포넌트입니다. 컬럼 수와 간격을 조절할 수 있습니다.
              </Text>
            </Stack>

            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  인터랙티브 Grid 빌더
                </Text>
                <Grid columns={2} gap="xl">
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">컬럼 수 조절</Text>
                    <Stack direction="row" spacing="sm">
                      {[2, 3, 4, 5, 6].map((cols) => (
                        <Button
                          key={cols}
                          variant={selectedColumns === cols ? "filled" : "outlined"}
                          colorScheme="primary"
                          size="sm"
                          onClick={() => setSelectedColumns(cols)}
                        >
                          {cols}열
                        </Button>
                      ))}
                    </Stack>
                  </Stack>
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">결과 미리보기</Text>
                    <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="primary">
                      <Grid columns={selectedColumns} gap="md">
                        {Array.from({ length: selectedColumns * 2 }, (_, i) => (
                          <Box key={i} backgroundColor="primary" padding="md" borderRadius="sm">
                            <Text variant="caption-1" weight="bold" color="onColor" align="center">
                              {i + 1}
                            </Text>
                          </Box>
                        ))}
                      </Grid>
                    </Box>
                    <Box backgroundColor="primary" padding="sm" borderRadius="sm">
                      <Text variant="caption-1" weight="bold" color="onColor" align="center">
                        columns={selectedColumns} gap="md"
                      </Text>
                    </Box>
                  </Stack>
                </Grid>
              </Stack>
            </Box>

            {/* Grid 사용 예시 */}
            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  Grid 레이아웃 예시
                </Text>
                
                <Stack spacing="lg">
                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">카드 그리드 (3열)</Text>
                    <Grid columns={3} gap="lg">
                      {Array.from({ length: 6 }, (_, i) => (
                        <Box key={i} backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                          <Stack spacing="md">
                            <Text variant="heading-3" weight="bold">카드 {i + 1}</Text>
                            <Text variant="body-2" color="secondary">
                              그리드 레이아웃으로 정렬된 카드입니다.
                            </Text>
                            <Button variant="outlined" colorScheme="primary" size="sm">
                              자세히 보기
                            </Button>
                          </Stack>
                        </Box>
                      ))}
                    </Grid>
                  </Stack>

                  <Stack spacing="md">
                    <Text variant="heading-3" weight="medium">아이콘 그리드 (6열)</Text>
                    <Grid columns={6} gap="md">
                      {['📦', '📚', '🔲', '🔘', '🎨', '⚙️', '📱', '💻', '🖥️', '⌚', '🎧', '📷'].map((icon, i) => (
                        <Box key={i} backgroundColor="primary" padding="lg" borderRadius="md" style={{ aspectRatio: '1' }}>
                          <Stack spacing="none" align="center" justify="center" style={{ height: '100%' }}>
                            <Text variant="title-2" align="center">{icon}</Text>
                          </Stack>
                        </Box>
                      ))}
                    </Grid>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>

          {/* 컴포넌트 조합 예시 */}
          <Stack spacing="lg">
            <Stack spacing="md">
              <Text variant="title-1" weight="bold">
                🔧 컴포넌트 조합 예시
              </Text>
              <Text variant="body-1" color="secondary">
                Box, Stack, Grid 컴포넌트를 조합하여 복잡한 레이아웃을 만들 수 있습니다.
              </Text>
            </Stack>

            <Box backgroundColor="surface" padding="xl" borderRadius="lg">
              <Stack spacing="lg">
                <Text variant="heading-2" weight="bold">
                  대시보드 레이아웃 예시
                </Text>
                
                <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                  <Stack spacing="lg">
                    {/* 헤더 */}
                    <Box backgroundColor="primary" padding="lg" borderRadius="md">
                      <Stack direction="row" spacing="lg" align="center" justify="space-between">
                        <Text variant="heading-2" weight="bold" color="onColor">대시보드</Text>
                        <Button variant="outlined" colorScheme="secondary" size="sm">
                          설정
                        </Button>
                      </Stack>
                    </Box>

                    {/* 메트릭 카드들 */}
                    <Grid columns={4} gap="lg">
                      {[
                        { title: '총 사용자', value: '1,234', color: 'primary' },
                        { title: '월간 방문', value: '5,678', color: 'cta' },
                        { title: '전환율', value: '12.3%', color: 'secondary' },
                        { title: '수익', value: '$9,876', color: 'primary' }
                      ].map((metric, i) => (
                        <Box key={i} backgroundColor={metric.color as any} padding="lg" borderRadius="md" shadow="sm">
                          <Stack spacing="md">
                            <Text variant="caption-1" weight="bold" color="onColor">{metric.title}</Text>
                            <Text variant="heading-1" weight="bold" color="onColor">{metric.value}</Text>
                          </Stack>
                        </Box>
                      ))}
                    </Grid>

                    {/* 콘텐츠 영역 */}
                    <Grid columns={3} gap="lg">
                      <Box style={{ gridColumn: 'span 2' }} backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                        <Stack spacing="md">
                          <Text variant="heading-3" weight="bold">차트 영역</Text>
                          <Box backgroundColor="surface" padding="xl" borderRadius="md" style={{ height: '200px' }}>
                            <Stack spacing="none" align="center" justify="center" style={{ height: '100%' }}>
                              <Text variant="body-1" color="secondary">📊 차트가 여기에 표시됩니다</Text>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                      
                      <Stack spacing="lg">
                        <Box backgroundColor="background" padding="lg" borderRadius="md" borderWidth="thin" borderColor="secondary">
                          <Stack spacing="md">
                            <Text variant="heading-3" weight="bold">최근 활동</Text>
                            <Stack spacing="sm">
                              {['새 사용자 가입', '주문 완료', '리뷰 작성'].map((activity, i) => (
                                <Box key={i} backgroundColor="surface" padding="md" borderRadius="sm">
                                  <Text variant="body-2">{activity}</Text>
                                </Box>
                              ))}
                            </Stack>
                          </Stack>
                        </Box>
                        
                                                 <Box backgroundColor="secondary" padding="lg" borderRadius="md">
                           <Stack spacing="md">
                             <Text variant="heading-3" weight="bold" color="onColor">빠른 액션</Text>
                             <Stack spacing="sm">
                               <Button variant="outlined" colorScheme="primary" size="sm">
                                 새 프로젝트
                               </Button>
                               <Button variant="outlined" colorScheme="primary" size="sm">
                                 보고서 생성
                               </Button>
                             </Stack>
                           </Stack>
                         </Box>
                      </Stack>
                    </Grid>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>

        </Stack>

      </Box>
    </Box>
  )
} 