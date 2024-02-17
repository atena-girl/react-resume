import React from 'react'

const IntroduceMyself = React.memo(() => {
    return (
        <div className={`w-2/3`}>
            <div className={"m-1 break-keep"}>
                안녕하세요 저는 6년차 웹 개발자 가필드입니다.
                저의 성격에 대해서 먼저 설명을 드리자면
                단점은 우유부단하다는 점입니다 그래서 생각이 계속 바뀝니다.
                하지만 그렇기에 정말 명확하지 않다면 고집을 부리지 않고 상대방의 의견을 잘 경청한다는 것 입니다.
            </div>
            <div className={"m-1 whitespace-pre-line"}>
                야근에 대해서는 거부감이 없습니다.
                기본적으로 자발 적인 야근이 아닌  어쩔 수 없이 하는 야근은 선호하는 편이 아니나 사실 업무를 함에 있어서 배포 및 테스트 대기, 고객 요청, 일정 준수 등 야근을 필요로 하는 상황이 잦기 때문에  상황에 따라서는 어쩔 수 없는 것이라고 생각 합니다
            </div>
            <div className={"m-1"}>
                추구 하는 팀 문화는 존중 배려가 있는 팀이었으면 좋겠습니다.
                존중과 배려가 있다면 서로 편하게 의사 소통이 가능 하여 업무진행에 도움이 되기 때문입니다.  물론 존중과 배려의 기준이 서로 달라 그 점에 있어서 마찰이 생길 수는 있으나 함께 맞춰 가야 하는 것이지 않을까 라고 생각 합니다.
            </div>
        </div>
    )
})

export default IntroduceMyself