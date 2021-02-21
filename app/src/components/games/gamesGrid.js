import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    tile: {
        height: '25vh'
    }
})

function GamesGrid() {
    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction="row"
                alignItems="center"
                justify="space-between"
                className="Groupgrid"
                spacing={5}
                id="Groupgrid"
            >
                <Grid item xs={6}>
                <a href="https://skribbl.io/">

                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                 Skribbl.io!
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Draw n Guess!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="https://www.enchambered.com/puzzles/">
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Escape Games!
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Find Clues to win!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    </a>

                </Grid>
                <Grid item xs={6}>
                <a href="https://codenames.game/">
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    CodeNames
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Connect with friends!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="https://www.ea.com/games/library/online">
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    EA Games
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Online Video Games
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href="https://www.chess.com/play/computer">
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Chess Online
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    PLay against friends or a computer!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
                <Grid item xs={6}>
                <a href='https://chrome.google.com/webstore/detail/uno-online/fpbnpljegegohllohhgcmgjbcijfcfld?hl=en'>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                   Uno Online
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Ruins Friendships :)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Game Title
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Game Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Game Title
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Game Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Game Title
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Game Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Game Title
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Game Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Game Title
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Game Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                        <CardActionArea className={classes.tile}>
                            <CardContent className="Groupdescription">
                                <Typography gutterBottom variant="h5" component="h2">
                                    Game Title
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Game Description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default GamesGrid;