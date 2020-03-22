import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropsType from 'prop-types';

import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from '@material-ui/core/Card';
import WeatherDisplay from '../weather-display/WeatherDisplay'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import { fetchCurrentWeather } from '../../../services/weather-service';

import FavoritesContext from './FavoritesContext';



class FavoriteItem extends Component {


    static contextType = FavoritesContext

    constructor(props) {
        super(props);
        this.state = {
            openRemoveDialog: false,
            weather: {},

        }

        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    componentDidMount() {
        let value = this.context
        value.setLoading(true);
        fetchCurrentWeather(this.props.favorite.Key)
            .then(response => {
                if (response.status === 200) {

                    const currentWeather = {
                        WeatherText: response.data[0].WeatherText,
                        WeatherIcon: response.data[0].WeatherIcon,
                        Temperature: response.data[0].Temperature.Metric.Value,
                    }
                    this.setState({ weather: currentWeather }
                        , () => {
                            value.setLoading(false);
                        })
                }
            })
            .catch(err => this.context.openErrorMessage("Can't fetch from server"));
    }



    handleDialogOpen() {
        this.setState({ openRemoveDialog: true });
    };

    handleDialogClose() {
        this.setState({ openRemoveDialog: false });
    };

    render() {
        const { favorite } = this.props
        const { weather } = this.state
        let contextFavorites = this.context




        if (contextFavorites.loading) {
            return <Card className='weather-card loading-style'><CircularProgress size={100} /></Card >
        }
        else
            return (
                <div>
                    <DialogAction
                        openRemoveDialog={this.state.openRemoveDialog}
                        handleDialogClose={this.handleDialogClose}
                        onFavoriteDelete={contextFavorites.onFavoriteDelete}
                        favorite={favorite}
                    />

                    <Grid container
                        alignItems='center'
                        justify="center"
                    >
                        <Grid item xs={12}>
                            <WeatherDisplay
                                title={favorite.LocalizedName}
                                temperature={weather.Temperature}
                                text={weather.WeatherText}
                                iconPhrase={weather.WeatherIcon}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <Divider ></Divider>
                        </Grid>
                        <Grid item >
                            <IconButton
                                aria-label="Delete from favorites"
                                onClick={() => this.handleDialogOpen()}
                            >
                                <DeleteIcon />
                            </IconButton>
                            <IconButton
                                className=""
                            >
                                <Link className="link" to={'/'} >
                                    <ArrowForwardIcon onClick={() => {
                                        contextFavorites.setLoading(true);
                                        contextFavorites.setSelected(favorite);
                                    }} ></ArrowForwardIcon>
                                </Link>
                            </IconButton>

                        </Grid>
                        
                    </Grid>

                </div>



            )
    }
}



const DialogAction = ({ openRemoveDialog, handleDialogClose, onFavoriteDelete, favorite }) => {
    return (

        <Dialog
            open={openRemoveDialog}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {" Are you sure you want delete this favorite?"}
            </DialogTitle>
            <DialogActions>
                <Button
                    onClick={() => {
                        onFavoriteDelete(favorite);
                        handleDialogClose();
                    }}
                    color="primary"
                >
                    Yes
                </Button>
                <Button onClick={() => handleDialogClose()} color="primary">
                    No
                </Button>
            </DialogActions>
        </Dialog>
    )
}

FavoriteItem.contextType = FavoritesContext

FavoriteItem.PropsType = {
    favorite: PropsType.array.isRequired
}

export default FavoriteItem;