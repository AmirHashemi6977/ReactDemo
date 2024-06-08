import {
  Box,
  Button,
  DialogProps,
  Divider,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import {
  dialogBackgroundColor,
  dialogTitleColor,
  grdHeaderColor,
  info,
} from "../../../utils/colorPalette";
import { Span } from "../../Typography";

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarExport,
  GridCsvExportOptions,
  GridToolbar,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import RuleFolderOutlinedIcon from "@mui/icons-material/RuleFolderOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { useCallback, useState } from "react";
import { read, utils, writeFile } from "xlsx";
import styled from "@emotion/styled";

export default function FeedsBox() {
  const initialRows: any = [
    {
      id: 1,
      name: "P30download",
      healthy: true,
      active: true,
      update: "10m",
      engagement: "2",
    },
    {
      id: 2,
      name: "Soft98",
      healthy: false,
      active: true,
      update: ">6h",
      engagement: "5",
    },
  ];

  type Row = (typeof initialRows)[number];

  const [rows, setRows] = useState<Row[]>(initialRows);
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const excelData = utils.sheet_to_json(workbook.Sheets[sheetName]);
        setRows(excelData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const exportToExcel = () => {
    // Create a new workbook
    const workbook = utils.book_new();

    // Create a new worksheet
    const worksheet = utils.json_to_sheet(rows);

    // Add the worksheet to the workbook
    utils.book_append_sheet(workbook, worksheet, "FeedsData");

    writeFile(workbook, "FeedsData.xlsx");
  };

  const deleteFeeds = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );

  const editTitle = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {});
    },
    []
  );

  const createRule = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {});
    },
    []
  );

  const filterFeeds = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {});
    },
    []
  );

  const columns: GridColDef<(typeof rows)[number]>[] = [
    //{ field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerClassName: "grdTitleColor",
      headerName: "نام",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    {
      field: "healthy",
      headerClassName: "grdTitleColor",
      headerName: "وضعیت سایت",
      minWidth: 130,
      flex: 1,
      type: "boolean",
      editable: true,
    },
    {
      field: "active",
      headerClassName: "grdTitleColor",
      headerName: "فعال بودن",
      type: "boolean",
      minWidth: 110,
      flex: 1,
      editable: true,
    },
    {
      field: "update",
      headerClassName: "grdTitleColor",
      headerName: "به روز شده",
      type: "string",
      minWidth: 110,
      flex: 1,
      // valueGetter: (params: { value: any }) => {
      //   const updateDate = new Date(params.value);
      //   return updateDate.getMinutes();
      // },
      editable: true,
    },
    {
      field: "engagement",
      headerClassName: "grdTitleColor",
      headerName: "درصد خوانده شده",
      description: "درصد مفاله های خوانده شده نسبت به پست شده",
      type: "string",
      minWidth: 150,
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      headerName: "عملیات",
      headerClassName: "grdTitleColor",
      type: "actions",
      minWidth: 150,
      flex: 1,
      sortable: false,

      getActions: (params: any) => [
        <Tooltip title="ویرایش نام">
          <GridActionsCellItem
            icon={
              <ModeEditOutlineOutlinedIcon color="disabled"></ModeEditOutlineOutlinedIcon>
            }
            label="editTitle"
            onClick={editTitle(params.id)}
          />
        </Tooltip>,

        <Tooltip title="تعریف قوانین">
          <GridActionsCellItem
            icon={
              <RuleFolderOutlinedIcon color="disabled"></RuleFolderOutlinedIcon>
            }
            label="createRule"
            onClick={createRule(params.id)}
          />
        </Tooltip>,

        <Tooltip title="فیلتر بازخورد">
          <GridActionsCellItem
            icon={
              <FilterAltOutlinedIcon color="disabled"></FilterAltOutlinedIcon>
            }
            label="filterFeeds"
            onClick={filterFeeds(params.id)}
          />
        </Tooltip>,

        <Tooltip title="حذف اشتراک">
          <GridActionsCellItem
            icon={
              <DeleteOutlineOutlinedIcon color="disabled"></DeleteOutlineOutlinedIcon>
            }
            label="Delete"
            onClick={deleteFeeds(params.id)}
          />
        </Tooltip>,
      ],
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer sx={{ padding: 1 }}>
        <GridToolbarColumnsButton
          slotProps={{
            tooltip: { title: "ستون ها" },
            button: { variant: "contained", color: "inherit" },
          }}
        />

        <GridToolbarFilterButton
          slotProps={{
            tooltip: { title: "فیلتر" },
            button: { variant: "contained", color: "inherit" },
          }}
        />

        <Tooltip title="خروجی اکسل">
          <Button
            onClick={exportToExcel}
            className="css-tx9zta-MuiButtonBase-root-MuiButton-root"
            variant="contained"
            color="inherit"
          >
            <label
              htmlFor="export-excel"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FileDownloadIcon style={{ fontSize: "18px" }}></FileDownloadIcon>
              Export
            </label>
          </Button>
        </Tooltip>

        <Tooltip title="ورودی اکسل">
          <Button
            className="css-tx9zta-MuiButtonBase-root-MuiButton-root"
            variant="contained"
            color="inherit"
          >
            <label
              htmlFor="file-input"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FileUploadIcon style={{ fontSize: "18px" }}></FileUploadIcon>
              Import
            </label>
            <input
              type="file"
              accept=".xlsx, .xls ,.csv"
              onChange={handleFileUpload}
              style={{ display: "none" }}
              id="file-input"
            />
          </Button>
        </Tooltip>
      </GridToolbarContainer>
    );
  }

  return (
    <Grid marginX="10px" columns={18} xs={18} sm={18} md={18} lg={12} xl={12}>
      <Box
        sx={{
          display: "flex",
          padding: "8px",
          backgroundColor: grdHeaderColor,
        }}
      >
        <Typography sx={{ marginLeft: "1%" }}>
          <strong>همه: </strong>
        </Typography>

        <Typography>
          <strong>1</strong>
        </Typography>
      </Box>
      <Box
        sx={{
          "& .grdTitleColor": {
            backgroundColor: dialogBackgroundColor,
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{
            toolbar: CustomToolbar,
          }}
          disableColumnResize={true}
          disableColumnMenu={true}
          disableAutosize={true}
        />
      </Box>
    </Grid>
  );
}
