import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import { server_calls } from '../api/server';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { TemplateForm } from '../Forms/SaveTemplateform'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'name', headerName: 'Template Name', flex: 1 },
    { field: 'template_issue_number', headerName: 'Template Issue Number', flex: 1 },
    { field: 'template_volume_number', headerName: 'Template Volume Number', flex: 1 },
    { field: 'template_data', headerName: 'Template Date', flex: 2 },
    { field: 'template_hoa', headerName: 'Template HOA', flex: 2 }
];

interface gridData {
    data: {
        id?: string
    }
};

const useStyle = makeStyles({
    background: {
        backgroundColor: '#F5FFFA'
    },
});

export const DataTable = () => {
    const classes = useStyle()

    let { templateData, getData } = useGetData();
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<gridData>({data:{}})
    const [selectionModel, setSelectionModel] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true)
    };

    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout(() => { window.location.reload(); }, 1000)
    };

    return (
        <div style={{ height: 400, width: '100%' }} className={`${classes.background}`}>
            <h2>List of templates</h2>

            <DataGrid rows={templateData} columns={columns} pageSize={5} checkboxSelection={true} onSelectionModelChange={(item) => {
                setSelectionModel(item)
            }} />

            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>

            {/*Dialog popup*/}
            <Dialog open={open} onClose={handleClose} aria-aria-labelledby='form-dailog-title'>
                <DialogTitle id="form-dialog-title">Update Template {selectionModel}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update</DialogContentText>
                    <TemplateForm id={selectionModel!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Cancel</Button>
                    <Button onClick={handleClose} color='primary'>Complete</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
