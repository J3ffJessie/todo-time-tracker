import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, goal, reason) {
  return {name, goal, reason};
}

const rows = [
  createData('Monday', 'Test', null),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day Of The Week</TableCell>
            <TableCell align="right">Goal</TableCell>
            <TableCell align="right">Incomplete Reason</TableCell>
            <TableCell align="right">Goal</TableCell>
            <TableCell align="right">Incomplete Reason</TableCell>
            <TableCell align="right">Goal</TableCell>
            <TableCell align="right">Incomplete Reason</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.goal}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>
              <TableCell align="right">{row.goal}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>
              <TableCell align="right">{row.goal}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}