import React from 'react'
import {
    withStyles,
    Theme,
    createStyles,
    makeStyles,
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: '#f5f5f5',
            color: theme.palette.primary.main,
        },
        body: {
            fontSize: 14,
        },
        root: {
            borderBottom: 0,
        },
    })
)(TableCell)

const StyledTableRow = withStyles(() =>
    createStyles({
        root: {
            '&:hover': {
                border: '1px solid #2C665D',
            },
        },
    })
)(TableRow)

type rowData = {
    payoutId: string
    source: string
    date: string
    amount: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createData(
    payoutId: string,
    source: string,
    date: string,
    amount: string
) {
    return { payoutId, source, date, amount }
}

const rows: rowData[] = []

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 5; i++) {
    rows.push(
        createData(
            'KLA12578DHQ',
            'vell pellentesque omare',
            '25th November, 2020',
            '$1200'
        )
    )
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    tableHead: {
        borderRadius: 10,
    },
})

export default function Tables(): JSX.Element {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow className={classes.tableHead}>
                        <StyledTableCell>Payout ID</StyledTableCell>
                        <StyledTableCell>Source</StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Amount</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.payoutId}>
                            <StyledTableCell component="th" scope="row">
                                {row.payoutId}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.source}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                {row.amount}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
