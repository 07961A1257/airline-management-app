import React, { useState, useEffect } from 'react';
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
import Axios from '../../config/api.config';
import { Typography } from '@mui/material';

const PassengerList = () => {
  const [data, setData] = useState([]);
  const allowedPageSizes = [10, 20, 30, 40, 50];
  const fetchData = async () => {
    await Axios.get('/passengers').then((response) => {
      if (response.data) {
        setData(response.data);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h3">Passengers List</Typography>
      <DataGrid
        dataSource={data}
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
