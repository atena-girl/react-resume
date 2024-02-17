import React from 'react'
import IntroduceMyself from 'components/Introduce/IntroduceMyself'
import DefaultInfo from "components/Introduce/DefaultInfo";
const Content = React.memo(() => {
    return (
        <div className={"grid grid-cols-2"}>
            <DefaultInfo/>
            <IntroduceMyself/>
        </div>
    )
})

export default Content