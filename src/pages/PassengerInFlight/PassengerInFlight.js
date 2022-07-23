import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadAncillaryList } from '../../redux/actions/ancillaryAction';
import { loadPassengerList, savePassengerList } from '../../redux/actions/passengerAction';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  Paper,
  Backdrop,
  CircularProgress
} from '@mui/material';
import { Flight } from '@mui/icons-material';

const PassengerInFlight = ({
  passengers,
  loadPassengerList,
  savePassengerList,
  loading,
  // eslint-disable-next-line react/prop-types
  ancillaryList,
  loadAncillaryList
}) => {
  // const classes = useClasses(styles);
  const [activeFlight, setActiveFlight] = React.useState(null);
  const initFlightData = async () => {
    setActiveFlight(null);
    if (passengers.length === 0) {
      await loadPassengerList();
    }
    // eslint-disable-next-line react/prop-types
    if (ancillaryList.length === 0) {
      await loadAncillaryList();
    }
  };

  React.useEffect(() => {
    initFlightData();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handelUpdatePassengerDetails = (passenger) => {
    savePassengerList(passenger).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Backdrop
            // sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Card variant="outlined">
            <CardHeader title="Ancillary  Services" align="center" />
            <CardContent align="center">
              <Paper margin="normal">
                <List>
                  <ListItem>
                    <Button
                      variant="contained"
                      color={activeFlight === 'f1' ? 'primary' : 'default'}
                      // className={classes.button}
                      onClick={() => setActiveFlight('f1')}
                      startIcon={<Flight />}>
                      Flight 1
                    </Button>
                    <Button
                      variant="contained"
                      color={activeFlight === 'f2' ? 'primary' : 'default'}
                      onClick={() => setActiveFlight('f2')}
                      // className={classes.button}
                      startIcon={<Flight />}>
                      Flight 2
                    </Button>
                    <Button
                      variant="contained"
                      color={activeFlight === 'f3' ? 'primary' : 'default'}
                      onClick={() => setActiveFlight('f3')}
                      // className={classes.button}
                      startIcon={<Flight />}>
                      Flight 3
                    </Button>
                  </ListItem>
                </List>
              </Paper>
              {/* <PassengersOptServices
                classes={classes}
                filterOptions={{}}
                passengers={passengers}
                ancillaryList={ancillaryList}
                flightFilter={activeFlight}
                savePassengerDetails={handelUpdatePassengerDetails}
                isAncillary={true}
              /> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

PassengerInFlight.propTypes = {
  passengers: PropTypes.array.isRequired,
  loadPassengerList: PropTypes.func.isRequired,
  savePassengerList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loadAncillaryList: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  ancillaryList: state.ancillaryList,
  passengers: state.passengers,
  loading: state.apiCallStatus > 0
});

const mapDispatchToProps = {
  loadPassengerList,
  savePassengerList,
  loadAncillaryList
};

export default connect(mapStateToProps, mapDispatchToProps)(PassengerInFlight);
