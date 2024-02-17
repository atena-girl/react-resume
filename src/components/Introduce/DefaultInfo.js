import React from 'react'
import myFaceLogo from 'asset/myFace.png';

const DefaultInfo = React.memo(() => {
    return (
        <div className="w-1/2 m-10">
            <img src={myFaceLogo} alt="MyFace.logo"/>
        </div>
    )
})

export default DefaultInfo