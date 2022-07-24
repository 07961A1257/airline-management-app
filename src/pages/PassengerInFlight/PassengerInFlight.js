import * as React from 'react';
import { Container, Grid, Paper, Box } from '@mui/material';
import DataGrid, {
  Scrolling,
  Paging,
  Sorting,
  HeaderFilter,
  SearchPanel,
  Column,
  RequiredRule
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.teal.dark.css';

import useClasses from '../../hooks/useClasses';
import FlightData from './../PassengerCheckIn/FlightData';

import { getCheckInPassengersByFlight } from '../../api/checkInPassengerService';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1),
    textAlign: 'center'
  },
  corridor: {
    margin: theme.spacing(1)
  }
});

const PassengerInFlight = () => {
  // eslint-disable-next-line no-unused-vars
  const [flightId, setFlightId] = React.useState(1);
  const [passengersData, setPassengersData] = React.useState([]);
  const classes = useClasses(styles);

  const selectedFlight = (value) => {
    setFlightId(value);
  };

  const fetchData = async (flightId) => {
    await getCheckInPassengersByFlight(flightId).then((response) => {
      if (response) {
        setPassengersData(response);
      }
    });
  };

  const onCellPrepared = (e) => {
    if (e.rowType === 'data' && e.column.dataField === 'isSpecialMeal') {
      e.cellElement.style.backgroundColor = e.data.isSpecialMeal === true ? 'teal' : '';
    }
  };

  React.useEffect(() => {
    fetchData(flightId);
  }, [flightId]);

  return (
    <Container className={classes.root}>
      <Grid container spacing={1}>
        <Paper className={classes.paper}>
          <Box component={'div'}>
            <FlightData getSelectedFlight={selectedFlight} />
          </Box>
          <Box component={'div'}>
            <DataGrid
              dataSource={passengersData}
              showBorders={true}
              allowColumnReordering={true}
              allowColumnResizing={true}
              columnAutoWidth={true}
              onCellPrepared={onCellPrepared}>
              <Scrolling rowRenderingMode="virtual"></Scrolling>
              <Sorting mode="multiple" />

              <HeaderFilter visible />
              <SearchPanel visible width={240} placeholder="Search..." />
              <Paging defaultPageSize={10} />

              <Column dataField="name" allowEditing={false}>
                <RequiredRule />
              </Column>
              <Column dataField="flight" allowEditing={false}>
                <RequiredRule />
              </Column>
              <Column dataField="seat">
                <RequiredRule />
              </Column>
              <Column dataField="isInfant"></Column>
              <Column dataField="isSpecialMeal"></Column>
              <Column dataField="isWheelChair"></Column>
            </DataGrid>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
};

export default PassengerInFlight;
