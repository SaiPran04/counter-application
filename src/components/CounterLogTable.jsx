import React, { useState, useContext } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, TextField, Pagination
} from '@mui/material';
import { CounterContext } from '../CounterContext';

function CounterLogTable() {
  const { log } = useContext(CounterContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredLog = log.filter(
    entry =>
      entry.time.toLowerCase().includes(searchQuery) ||
      String(entry.count).toLowerCase().includes(searchQuery)
  );

  const totalPages = Math.ceil(filteredLog.length / itemsPerPage);
  const paginatedLog = filteredLog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (_, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'auto', mt: 2, padding: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Counter History
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by time or value..."
        onChange={handleSearch}
        value={searchQuery}
        sx={{ mb: 2 }}
      />
      <TableContainer>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Counter Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedLog.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.time}</TableCell>
                <TableCell>{entry.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Paper>
  );
}

export default CounterLogTable;
