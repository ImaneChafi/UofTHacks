import { CardContent } from '@material-ui/core'
import React, { useState } from 'react'
import {Card, Typography, Switch, FormControlLabel} from '@material-ui/core'

function Feed() {
    const [showComments, setShowComments] = useState(false);
    return (
        <>
            <Card>
                <CardContent>
                    <Typography component="h4" className='postTitle' align="left">Post Title</Typography>
                    <Typography component="p" className='postContent' align="left">Post Content</Typography>
                </CardContent>
                <FormControlLabel
                    control={
                    <Switch
                        checked={showComments}
                        onChange={() => setShowComments(!showComments)}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Show Comments"
                />
            </Card>
        </>
    )
}

export default Feed;