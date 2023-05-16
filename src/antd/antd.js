import React from 'react'
import { Button } from 'antd'

export default function antd() {
    return (
        <div>
            <Button danger>antd</Button>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </div>
    )
}
