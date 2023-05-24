import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { themeStyles } from '../../../themeStyles'
import DataList from '../common/DataList'
import DataTable from '../common/DataTable'
import LIstDataView from '../common/LIstDataView'




function UsersList() {


    const [usersData, setUsersData] = useState({});

    useEffect( () => {
        axios.get("http://localhost:5000/users/data").then(
            result => setUsersData(result.data)
        )
    }, [] )
    return (
        <Grid container >
            <Grid item md={12}>
                <Typography sx={{ ...themeStyles.mainHeading, fontSize: "20px" }}>
                    Users Data
                </Typography>
            </Grid>
            <Grid item md={12}>
                {/* <LIstDataView /> */}
                <DataList usersData={usersData} />
                {/* <DataTable /> */}
            </Grid>
        </Grid>
    )
}

export default UsersList