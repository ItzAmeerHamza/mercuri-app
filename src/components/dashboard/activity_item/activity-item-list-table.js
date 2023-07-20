import { useEffect, useState } from "react";
import NextLink from "next/link";
import numeral from "numeral";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { ArrowRight as ArrowRightIcon } from "../../../icons/arrow-right";
import { PencilAlt as PencilAltIcon } from "../../../icons/pencil-alt";
import { getInitials } from "../../../utils/get-initials";
import { Scrollbar } from "../../scrollbar";
import { CustomerListTableLoader } from "../customer/customer-list-table-loader";
import Link from "next/link";

//CustomerListTable
export const ActivityItemListTable = (props) => {
  const {
    activities,
    activitiesCount,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    loading,
    ...other
  } = props;

  console.log("Activity List Table: ", activities);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  // Reset selected customers when customers change
  useEffect(
    () => {
      if (selectedCustomers.length) {
        setSelectedCustomers([]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activities]
  );

  const handleSelectAllCustomers = (event) => {
    setSelectedCustomers(
      event.target.checked ? activities.map((activity) => activity.activityItemId) : []
    );
  };

  const handleSelectOneCustomer = (event, customerId) => {
    if (!selectedCustomers.includes(customerId)) {
      setSelectedCustomers((prevSelected) => [...prevSelected, customerId]);
    } else {
      setSelectedCustomers((prevSelected) =>
        prevSelected.filter((id) => id !== customerId)
      );
    }
  };

  const enableBulkActions = selectedCustomers.length > 0;
  const selectedSomeCustomers =
    selectedCustomers.length > 0 && selectedCustomers.length < activities.length;
  const selectedAllCustomers = selectedCustomers.length === activities?.length;

  return (
    <div {...other}>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "neutral.800" : "neutral.100",
          display: enableBulkActions ? "block" : "none",
          px: 2,
          py: 0.5,
        }}
      >
        <Checkbox
          checked={selectedAllCustomers}
          indeterminate={selectedSomeCustomers}
          onChange={handleSelectAllCustomers}
        />
        <Button size="small" sx={{ ml: 2 }}>
          Delete
        </Button>
        <Button size="small" sx={{ ml: 2 }}>
          Edit
        </Button>
      </Box>
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead
            sx={{ visibility: enableBulkActions ? "collapse" : "visible" }}
          >
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAllCustomers}
                  indeterminate={selectedSomeCustomers}
                  onChange={handleSelectAllCustomers}
                />
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Target</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Measurement Frequency</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading &&
              <>
              <CustomerListTableLoader />
              <CustomerListTableLoader />
              <CustomerListTableLoader />
              <CustomerListTableLoader />
              </>
            }
            {activities?.map((activity) => {
              console.log("Activityyy : ", activity.activityItemId);
              const isCustomerSelected = selectedCustomers.includes(
                activity.activityItemId
              );
              return (
                <TableRow hover key={activity.activityItemId} selected={isCustomerSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isCustomerSelected}
                      onChange={(event) =>
                        handleSelectOneCustomer(event, activity.activityItemId)
                      }
                      value={isCustomerSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {activity.title}
                    </Box>
                  </TableCell>
                  <TableCell>
                    {activity.value}
                  </TableCell>
                  <TableCell>
                    {activity.target}
                  </TableCell>
                  <TableCell>
                    <Typography color="success.main" variant="subtitle2">
                      {activity.active? "true" : "false"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {activity.measurementFrequency}
                  </TableCell>
                  <TableCell align="right">
                    <Link href={{pathname:'/dashboard/activity_item/edit', query: {...activity} }}>
                      <IconButton component="a">
                        <PencilAltIcon fontSize="small" />
                      </IconButton>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={activitiesCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
      </div>
  );
};

ActivityItemListTable.propTypes = {
  activities: PropTypes.array.isRequired,
  activitiesCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// {
//   "tItle": "string",
//   "fileContentBase64":"string",
//   "PostText":"string",
//   "fileTypeExtension":"string"
//   }
//   Hunter Ntokozo Motsumi22:27
//   Text
//   VoiceNote
//   api/notes/getNote
//   You22:42
//   Sub menu Item Activtity groups
//   •	Table to show “Activity group name” , “Active”
//   Sub menu item User Activities
//   •	Table to show “Activity group Name”, “allocated to”(Name of coachee), Value, Target, MeasurementFrequency, Active, ActivityStartDate, ActivityEndDate, UpdatedOnDate
//   Hunter Ntokozo Motsumi22:43
//   New manu Item Activities
  
//   Sub menu User Activities
  
//   Table to show “Activity group Name”, “allocated to”(Name of coachee),  Value, Target, MeasurementFrequency, Active, ActivityStartDate, ActivityEndDate, UpdatedOnDate
  
//   Get call for table of items - GetAllActivityItems
  
//   Post Call to add activity Item -  AddActivityItem
  
//   Put Call to update an existing item - Update activityItem
  
//   Sub menu Activity Feedback
  
//   (forgot to add the Get call for dashboard) - will call it GetAllActivityFeedbacks
  
//   No Editin
//   No Editing in this table, only viewing - Model will be same as the GET Call for GetActivityFeedBackForCoach (This caoch call is only for flutter app but model will be same once I add the route)