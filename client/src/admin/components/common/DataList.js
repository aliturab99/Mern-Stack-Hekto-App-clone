import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeletePopUp from "./DeletePopUp";



const handleEdit = (id) => {
  // Implement edit logic here
  console.log(`Edit user with id ${id}`);
};

const handleDelete = (id) => {
  console.log(`Delete user with id ${id}`);
};


const columns = [
  {
    field: 'name',
    headerName: 'Full name',
    width: 190,
    valueGetter: (params) => `${params.row.name}`,
  },
  {
    field: 'phone_number',
    headerName: 'Phone Number',
    type: 'string',
    width: 160,
  },
  {
    field: 'active',
    headerName: 'Account Status',
    type: 'number',
    width: 100,
  },
  {
    field: 'type',
    headerName: 'User Type',
    type: 'number',
    width: 100,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 70,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      return (
        <IconButton variant="contained" color="primary" onClick={() => handleEdit(params.row.id)}>
          <EditIcon />
        </IconButton>
      );
    }
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 90,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      return (
        <DeletePopUp />
      );
    }
  }
];
 
export default function DataList({ usersData }) {
  const rows = usersData


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      
      />
    </div>
  );
}