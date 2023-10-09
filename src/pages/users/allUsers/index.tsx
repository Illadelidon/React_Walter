import React, { useEffect, useState } from "react";
import { DataGrid, GridApi, GridCellValue, GridColDef } from "@mui/x-data-grid";
import Loader from "../../../components/loader";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Grid, TablePagination } from "@mui/material";
import Paper from "@mui/material/Paper";



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "right",
  color: theme.palette.text.secondary,
  height: "700px",
}));
const Users: React.FC<any> = () => {

  const { GetAll } = useActions();
  const { loading, allUsers } = useTypedSelector((state) => state.UserReducer);
  let rows: any[] = allUsers;
  const [isRedirect, setIsRedirect] = useState(false);
  useEffect(() => {
    GetAll();
  }, []);
  const columns: GridColDef[] = [
    { field: "firstName", headerName: "FirstName", width: 170 },
    { field: "lastName", headerName: "LastName", width: 180 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phoneNumber", headerName: "Phone", width: 150 },
    { field: "emailConfirmed", headerName: "Confirmed email", width: 130 },
    {
      field: "lockoutEnd",
      headerName: "Lockout End",
      width: 250,
    },
    { field: "role", headerName: "Role", width: 130 },
    {
      field: "id",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking
          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};
          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          const userData = thisRow;
          setIsRedirect(true);
        };
        return <Button onClick={onClick}>Edit</Button>;
      },
    },
  ];
  if (loading) {
    return <Loader />;
  }
  if (isRedirect) {
    return <Navigate to="/dashboard/userDetails" />;
  }
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mb: 2, textAlign: "right" }}>
          <Button variant="contained">
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="addusers"
            >
              Add new user
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <DataGrid
              initialState={{
                sorting: {
                  sortModel: [{ field: "surname", sort: "asc" }],
                },
              }}
              rows={rows}
              columns={columns}
              checkboxSelection
              hideFooterPagination={true}
              hideFooter={true}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

 

export default Users;