import {Anchor, Button, Card, Group, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WithSidebar from "../components/Layout/WithSidebar.tsx";

const AboutComponent = () => (
    <Stack>
        <Title>도움말</Title>

        <SimpleGrid cols={{base: 1, sm: 3}} spacing="md">
            <Card shadow="sm" padding="lg" withBorder>
                <CheckCircleIcon fontSize="large" className="text-blue-500 mb-2"/>
                <Text fw={500} size="lg" mb={8}>백준 AC 인증</Text>
                <Text size="sm">
                    백준 온라인 저지에서 해당 문제를 AC(맞았습니다)를 받아야 칸을 색칠할 수 있습니다. 해당 칸에 마우스를 올리면 하단에 뜨는 Solve! 버튼을 눌러주세요!
                </Text>
            </Card>

            <Card shadow="sm" padding="lg" withBorder>
                <GroupIcon fontSize="large" className="text-green-500 mb-2"/>
                <Text fw={500} size="lg" mb={8}>인접 최대 칸수</Text>
                <Text size="sm">
                    연습이 아닌 땅따먹기 모드에서는, 전체 푼 칸이 아닌, 서로 인접한 칸들의 최대 개수를 기준으로 순위가 결정됩니다.
                </Text>
            </Card>

            <Card shadow="sm" padding="lg" withBorder>
                <EmojiEventsIcon fontSize="large" className="text-yellow-500 mb-2"/>
                <Text fw={500} size="lg" mb={8}>순위 결정 기준</Text>
                <Text size="sm">
                    인접칸수 {'>'} 전체칸수 {'>'} 마지막 색칠 시간이 빠른 순으로 순위가 매겨지며, 색칠한 칸이 없는 유저들은 공동 최하위가 됩니다.
                </Text>
            </Card>
        </SimpleGrid>

        <Card shadow="sm" padding="lg" withBorder>
            <Group align="flex-start">
                <div style={{flex: 1}}>
                    <Title order={3} mb="sm">인접 칸 규칙</Title>
                    <Text size="sm">
                        인접한 칸이란 육각형 게임판 상에서 맞닿은 칸을 의미합니다.
                    </Text>
                    <Text mb="xs" size="sm">
                        오른쪽의 게임판에서 전체 색칠한 칸 수는 레드팀이 더 많지만, 인접한 칸 수에서 블루팀이 앞서 블루팀의 승리로 판정됩니다.
                    </Text>
                </div>
                <Card.Section>
                    <img
                        src="/images/adjacent_screenshot.png"
                        alt="인접 칸 예시"
                        style={{
                            maxWidth: '150px',
                            // height: 'auto',
                        }}
                    />
                </Card.Section>
            </Group>
        </Card>

        <Card shadow="sm" padding="lg" withBorder>
            <Title order={3} mb="md">신고/제보 및 건의사항</Title>
            <Group>
                <Anchor href="https://discord.gg/5KeFVHzfTH" target="_blank">
                    <Button variant="light" color="indigo">
                        Discord 참여하기
                    </Button>
                </Anchor>
            </Group>
        </Card>


    </Stack>
)

const AboutPage = () => {
    return (
        <WithSidebar>
            <AboutComponent/>
        </WithSidebar>
    )
}

export default AboutPage
