import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataGrid, {
  Scrolling,
  Pager,
  Paging,
  Sorting,
  FilterRow,
  HeaderFilter,
  SearchPanel
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.material.teal.dark.css';
import { Typography } from '@mui/material';
import { loadCheckInPassengers } from '../../redux/actions/checkInPassengerAction';

const PassengerList = () => {
  const dispatch = useDispatch();
  const passengers = useSelector((state) => console.log(state) || state.passengers);
  const allowedPageSizes = [10, 20, 30, 40, 50];
  console.log(passengers);

  React.useEffect(() => {
    dispatch(loadCheckInPassengers());
  }, []);

  return (
    <div>
      <Typography variant="h3">Passengers List</Typography>
      <DataGrid
        dataSource={passengers}
        showBorders={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}>
        <Scrolling rowRenderingMode="virtual"></Scrolling>
        <Sorting mode="multiple" />
        <FilterRow visible applyFilter />
        <HeaderFilter visible />
        <SearchPanel visible width={240} placeholder="Search..." />
        <Paging defaultPageSize={10} />
        <Pager
          visible={true}
          allowedPageSizes={allowedPageSizes}
          showPageSizeSelector
          showInfo
          showNavigationButtons
        />
      </DataGrid>
    </div>
  );
};

export default PassengerList;
