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