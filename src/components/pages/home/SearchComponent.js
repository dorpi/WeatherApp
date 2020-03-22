import React, { Component } from 'react'
import { fetchAutocomplete } from '../../../services/weather-service';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../pages.styles.css'

import PropsType from 'prop-types'


class SearchComponent extends Component {
  constructor(props){
    super(props);
    
    this.state={
      openOptions:false,
      options:[],
      inputValue:'',
      loading :false


    }
  }

   handleChange = (event) => {
    var letters = /[A-Za-z]+(\s+[A-Za-z]+)*/;
    if (event.target.value.length > 0 ) {
      if (event.target.value.match(letters)){
        this.setState({inputValue:event.target.value,openOptions:true})
      }
      else {
        this.setState({inputValue:'Else'+event.target.value,openOptions:false})
        this.props.openErrorMessage('Please enter only letters');
      }
    }
    else
    {
      this.setState({openOptions:false});
    }
  }


  componentDidUpdate(prevProps,prevState){
    if (prevState.inputValue !== this.state.inputValue){
      if (this.state.inputValue===''){
        this.setState({options:[]});
      }
      else {
        fetchAutocomplete(this.state.inputValue)
        .then(response=>{
          
          this.setState({options:response.data,loading:false,open:true});
        })
        .catch(err=>{
          this.props.openErrorMessage('Server Error - Fetch failed')
        })
      }    
    }
    else if (prevState.open !== this.state.open){
      if (this.state.open ===false)
        this.setState({options:[]})
    }
  }


  onSelected(value, getTagProps){
      if (getTagProps) {
        const newSelected = {
          Key: getTagProps.Key,
          LocalizedName: getTagProps.LocalizedName,
          Type: getTagProps.Type
        };
        //set Loading to true
          this.props.setLoading(true)
          this.props.setSelected(newSelected);
      }
    }
  



  render() {
    const {selected} =this.props

    return (
      <Autocomplete
      className='search-style-text-field'
      open={this.state.openOptions}
      defaultValue={selected}
      onClose={() => {
        this.setState({openOptions:false});
      }}
      getOptionLabel={option => option.LocalizedName}
      options={this.state.options}
      loading={this.state.loading}
      onChange={(value, getTagProps)=>this.onSelected(value, getTagProps)}
      renderInput={params => (
        <TextField
          {...params}
         
          variant='outlined'
          label='Search city'
          onChange={(getTagProps)=>this.handleChange(getTagProps)}
          fullWidth
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <React.Fragment>
                {this.state.loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
              </React.Fragment>
            )
          }}
        />
        
      )}
      renderOption={option => (
          <Grid container alignItems='center'>
            <Grid item>
              <LocationOnIcon className='icon' />
            </Grid>
            <Grid item xs>
              <span key={option.Key}>{option.LocalizedName}</span>

              <Typography variant='body2' color='textSecondary'>
                {option.Country.LocalizedName}
              </Typography>
            </Grid>
          </Grid>
    )
  
      }
    />

    )
  }
  
}

SearchComponent.PropsType={
  setSelected:PropsType.func.isRequired,
  openErrorMessage:PropsType.func.isRequired,
  setLoading : PropsType.func.isRequired,
}

    
export default SearchComponent;
