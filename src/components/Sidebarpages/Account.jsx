  import * as React from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { setSearchQuery } from '../../redux/tableSlice';
  import Box from '@mui/material/Box';
  import Table from '@mui/material/Table';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableContainer from '@mui/material/TableContainer';
  import TableHead from '@mui/material/TableHead';
  import TablePagination from '@mui/material/TablePagination';
  import TableRow from '@mui/material/TableRow';
  import TableSortLabel from '@mui/material/TableSortLabel';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Paper from '@mui/material/Paper';
  import IconButton from '@mui/material/IconButton';
  import Tooltip from '@mui/material/Tooltip';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import GetAppIcon from '@mui/icons-material/GetApp';
  import TextField from '@mui/material/TextField';
  import { visuallyHidden } from '@mui/utils';
  import * as XLSX from 'xlsx';

  const headCells = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'phone', label: 'Phone' },
    { id: 'website', label: 'Website' },
    { id: 'accountStatus', label: 'Account Status' },
    { id: 'industry', label: 'Industry Type' },
    { id: 'remark', label: 'Remarks' },
    { id: 'action', label: 'Actions' },
  ];

  const rows = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `123-456-78${index % 10}${index % 10}`,
    website: `www.user${index + 1}.com`,
    accountStatus: index % 2 === 0 ? 'Active' : 'Inactive',
    industry: 'Technology',
    remark: 'Good client',
  }));

  function Account() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.table.searchQuery);

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, 'table_data.xlsx');
    };

    const handleSearch = (event) => {
      dispatch(setSearchQuery(event.target.value));
    };

    const filteredRows = rows.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    const visibleRows = React.useMemo(
      () =>
        [...filteredRows]
          .sort((a, b) =>
            order === 'desc'
              ? a[orderBy] < b[orderBy]
                ? 1
                : -1
              : a[orderBy] > b[orderBy]
              ? 1
              : -1
          )
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
      [order, orderBy, page, rowsPerPage, filteredRows]
    );

    return (
      <Box sx={{ width: '100%', p: 2 }}>
        <Paper sx={{ width: '100%', mb: 2, p: 2 }}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography variant="h6">Accounts</Typography>
              <Typography variant="body2" sx={{ color: 'gray', mt: -0.5 }}>
                Here's a list of your accounts
              </Typography>
            </Box>

            {/* Global Search Input */}
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              sx={{ ml: 'auto', mr: 2, width: 200 }}
            />

            {/* Export Button */}
            <Tooltip title="Export to Excel">
              <IconButton onClick={exportToExcel}>
                <GetAppIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>

          <TableContainer>
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#BFE3FB' }}>
                  {headCells.map((headCell) => (
                    <TableCell key={headCell.id} sx={{ fontWeight: 'bold', color: 'black' }}>
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={(e) => handleRequestSort(e, headCell.id)}
                      >
                        {headCell.label}
                        {orderBy === headCell.id && (
                          <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                          </Box>
                        )}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody >
                {visibleRows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? 'white' : '#F2F2F2',
                      '& td': { gap:'10px' },
                    }}
                  >
                    <TableCell >{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.website}</TableCell>
                    <TableCell>{row.accountStatus}</TableCell>
                    <TableCell>{row.industry}</TableCell>
                    <TableCell>{row.remark}</TableCell>
                    <TableCell>
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    );
  }

  export default Account;
