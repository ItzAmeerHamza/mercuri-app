import {
  Box,
  Link,
  Skeleton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

export const CompetencyListTableLoader = () => {

  return (
            <TableRow >
                  <TableCell padding="checkbox">
                    <Skeleton variant="square" animation="wave" width={20} height={20} sx={{marginLeft: "10px"}} />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                >
                      <Box sx={{ ml: 1 }}>
                      <Link color="inherit" variant="subtitle2">
                      <Skeleton variant="square" animation="wave" width={200} height={20}/>
                      </Link>
                      </Box>
                    </Box>
                  </TableCell>
              
              <TableCell>
              <Skeleton variant="rectangular" animation="wave" width={200} height={20}/>
                  </TableCell>
              <TableCell>
              <Skeleton variant="rectangular" animation="wave" width={30} height={20}/>
                  </TableCell>
                  <TableCell>
                    <Typography color="success.main" variant="subtitle2">
                    <Skeleton variant="rectangular"  animation="wave"  width={40} height={20}/>
                    </Typography>
                  </TableCell>
              <TableCell>
              <Box  sx={{
              display: 'flex',
              justifyContent: 'end',
              }}>
                  <Skeleton variant="rectangular" animation="wave" align="right" width={70} height={20} />
              </Box>
              </TableCell>
          </TableRow>
  );
};
