import React, { useMemo, useState } from 'react';
import { Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, TablePagination, IconButton, Paper, Pagination, Chip, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import DeletePopUp from '../common/DeletePopUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { categoryActionTypes, deleteCategory, loadCategories } from '../../store/actions/categoryActions';
import { Link, useParams } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import { loadOrders, orderActionTypes } from '../../store/actions/orderActions';
import { MapTwoTone } from '@mui/icons-material';


const columns = [
  { id: 'orderNumber', label: 'Order Number', },
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'status', label: 'Status' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    flex: 1
  },
  table: {
    height: "100%",
    width: "100%"
  },
  list: {},
  thead: {},
  tbody: {
    width: "100%"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    boxSizing: "border-box",
    minWidth: "100%",
    width: "100%"
  },
  headerRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
  cell: {
    display: "inline-flex",
    alignItems: "center",
    overflow: "hidden",
    flexGrow: 0,
    flexShrink: 0
  },
  justifyCenter: {
    justifyContent: "center"
  },
  expandingCell: {
    flex: 1
  },
  column: {},
  tableContainer: {
    "maxWidth": "100vw",
    overFlow: "scroll",
    WebkitOverflowScrolling: 'touch',
    '-ms-overflow-style': '-ms-autohiding-scrollbar'
  }
}));



function Orders({ orders, totalRecords, paginationArray, stateRowsPerPage, dispatch }) {
  const { recordsPerPage, pageNumber } = useParams(); // while coming back from Edit item

  const [page, setPage] = useState(pageNumber ? parseInt(pageNumber) : 0);
  const [rowsPerPage, setRowsPerPage] = useState(recordsPerPage ? parseInt(recordsPerPage) : parseInt(stateRowsPerPage));
  const classes = useStyles();

  const totalPages = useMemo(() => Math.ceil(totalRecords / rowsPerPage), [orders, rowsPerPage]);

  useEffect(() => {
    if (!paginationArray[page]) {
      dispatch(loadOrders(page, rowsPerPage))
    }

  }, [page, rowsPerPage])

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
    dispatch({ type: orderActionTypes.RESET_ORDER })
    dispatch({ type: orderActionTypes.UPDATE_ROWS_PERPAGE, payload: event.target.value })
  };


  const visibleRows = React.useMemo(() => {
    if (paginationArray[page]) {
      return orders.slice(paginationArray[page].startIndex, paginationArray[page].endIndex);
    }
    else {
      return [];
    }
  }, [orders, page, rowsPerPage]);


   console.log(visibleRows)
  const refreshList = () => {
    dispatch({ type: orderActionTypes.RESET_ORDER })
    if(page === 0)
      dispatch(loadOrders(page, rowsPerPage))
    else
      setPage(0);
  }

  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Box display="flex" justifyContent='space-between' m={3}>
            <Typography variant="h5">Orders</Typography>
            <Box>
              <Button sx={{ ml: 1 }} onClick={refreshList} variant="outlined" endIcon={<RefreshIcon />}>Refresh</Button>
            </Box>
          </Box>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {
                  columns.map((column, index) => (
                    <TableCell key={index}>{column.label}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => {
                console.log("Visible Rows",row)
                if (!row) return;
                if (row.is_deleted) return;
                return (
                  
                  <TableRow key={row._id} className={classes.headerRow}>
                  <TableCell>
                    <Link to={"/admin/orders/singleOrder/" + row._id + "/" + rowsPerPage + "/" + page}>
                      {row._id}
                    </Link>
                    </TableCell>

                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>
                    {
                      row.lastName
                    }
                  </TableCell>
                  <TableCell sx={{ display: "flex" }}>
                    <Link to={"/admin/orders/edit/" + row._id + "/" + rowsPerPage + "/" + page}>
                      <IconButton sx={{ color: "blue" }}>
                        <FontAwesomeIcon icon={faEdit} style={{ fontSize: "1rem" }} />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>)
              }
              )}
            </TableBody>
          </Table>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, 100, 250, 500]}
              component="div"
              count={totalRecords}
              rowsPerPage={rowsPerPage}
              page={orders.length ? page : 0}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              backIconButtonProps={{
                style: { display: "none" }
              }}
              nextIconButtonProps={{
                style: { display: "none" }
              }}

              style={{ height: "45px", overflow: "hidden" }}
            />
            <Box>
              <Pagination count={totalPages} page={page + 1} onChange={handleChangePage} variant="outlined" color="primary" shape="rounded" />
            </Box>
          </Box>
        </TableContainer>
      </Grid>
    </Grid>

  )
}


const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    totalRecords: state.orders.totalRecords,
    loadingRecords: state.progressBar.loading,
    paginationArray: state.orders.paginationArray,
    stateRowsPerPage: state.orders.rowsPerPage
  }
}

export default connect(mapStateToProps)(Orders);