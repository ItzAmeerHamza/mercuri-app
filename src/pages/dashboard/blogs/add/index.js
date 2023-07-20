import { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  CardActionArea,
  CardMedia,
  TextareaAutosize,
} from "@mui/material";
import { customerApi } from "../../../../__fake-api__/customer-api";
import { AuthGuard } from "../../../../components/authentication/auth-guard";
import { DashboardLayout } from "../../../../components/dashboard/dashboard-layout";
import { CustomerListTable } from "../../../../components/dashboard/customer/customer-list-table";
import { useMounted } from "../../../../hooks/use-mounted";
import { Download as DownloadIcon } from "../../../../icons/download";
import { Plus as PlusIcon } from "../../../../icons/plus";
import { Search as SearchIcon } from "../../../../icons/search";
import { Upload as UploadIcon } from "../../../../icons/upload";
import { gtm } from "../../../../lib/gtm";
import { axiosClient } from "../../../../api/config";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Alert, FormHelperText, CircularProgress } from "@mui/material";
import { useAuth } from "../../../../hooks/use-auth";
import NextLink from 'next/link';
import { Logo } from '../../../../components/logo';
import Link from "next/link";

// CustomerAdd
const BlogAdd = () => {
  const isMounted = useMounted();
  const queryRef = useRef(null);
  const router = useRouter();
  // const { register } = useAuth();
  //////// update the following hook ////////
  const { addBlog } = useAuth();
  const [error, setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     title: "",
  //     firstName: "",
  //     lastName: "",
  //     mobile: "",
  //     officeTel: "",
  //     enabled: false,
  //     companyId: 1,
  //     username: "",
  //     userRole: 1,
  //     submit: null,
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup
  //       .string()
  //       .email('Must be a valid email')
  //       .max(255)
  //       .required('Email is required'),
  //     title: Yup
  //       .string()
  //       .max(255)
  //       .required('Title is required'),
  //     firstName: Yup
  //       .string()
  //       .max(255)
  //       .required('First Name is required'),
  //     lastName: Yup
  //       .string()
  //       .max(255)
  //       .required('Last Name is required'),
  //     username: Yup
  //       .string()
  //       .max(255)
  //       .required('Username is required'),
  //     mobile: Yup
  //       .string()
  //       .max(255)
  //       .required('Mobile no is required'),
  //     password: Yup
  //       .string()
  //       .min(7)
  //       .max(255)
  //       .required('Password is required'),
  //   }),
  //   onSubmit: async (values, helpers) => {
  //     setLoading(true);
  //     let body = values;
  //     delete body["submit"];
  //     const res = register(body);
  //     if (res) {
  //       setSuccess(true);
  //     }else setSuccess(false);
  //     setLoading(false);
  //   },
  // });

  const formik = useFormik({
    initialValues: {
      title: "",
      fileContentBase64: "",
      PostText: "",
      fileTypeExtension: "",
      submit: null,
    },
    validationSchema: Yup.object({
      title: Yup
        .string()
        .max(255)
        .required('Title is required'),
      fileContentBase64: Yup
        .string()
        .required('File Content Base64 is required'),
      PostText: Yup
        .string()
        .required('Post Text is required'),
      fileTypeExtension: Yup
        .string()
        .max(255)
        .required('File Type Extension is required'),
    }),
    onSubmit: async (values, helpers) => {
      setLoading(true);
      let body = values;
      delete body["submit"];
      console.log("Blog Body : ", body);
      // Assuming you have a function called 'addBlog' for adding blogs
      const res = await addBlog(body);
      // const res = register(body);
      if (res) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
      setLoading(false);
    },
  });

  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);


 
  useEffect(
    () => {
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Head>
        <title>Dashboard: Add Blogs</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Add Blog</Typography>
              </Grid>
              <Grid item>
              <Link
         href={'/dashboard/blogs'}
        >
                <Button
                  variant="contained"
                >
                  Cancel
                  </Button>
                  </Link>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{justifyContent:"center", width:'100%'}}>
          <Card sx={{maxWidth:"sm", margin:"0px auto"}}>
          <Container
            sx={{
              py: {
                xs: "20px",
                md: "40px",
              },
            }}
              >
                <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40
                    }}
                  />
                </a>
              </NextLink>
              <Typography variant="h4">
                Add Blog
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Add blogs for the other user
              </Typography>
            </Box>
        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
          autoFocus
          error={Boolean(formik.touched.title && formik.errors.title)}
          fullWidth
          helperText={formik.touched.title && formik.errors.title}
          label="Title"
          margin="normal"
          name="title"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.title} // This value corresponds to the 'title' field in formik.values
        />

        <TextField
          autoFocus
          error={Boolean(formik.touched.fileContentBase64 && formik.errors.fileContentBase64)}
          fullWidth
          helperText={formik.touched.fileContentBase64 && formik.errors.fileContentBase64}
          label="File Content Base64"
          margin="normal"
          name="fileContentBase64"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fileContentBase64} // This value corresponds to the 'fileContentBase64' field in formik.values
        />

        <TextField
          autoFocus
          error={Boolean(formik.touched.PostText && formik.errors.PostText)}
          fullWidth
          helperText={formik.touched.PostText && formik.errors.PostText}
          label="Post Text"
          margin="normal"
          name="PostText"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.PostText} // This value corresponds to the 'PostText' field in formik.values
        />

        <TextField
          autoFocus
          error={Boolean(formik.touched.fileTypeExtension && formik.errors.fileTypeExtension)}
          fullWidth
          helperText={formik.touched.fileTypeExtension && formik.errors.fileTypeExtension}
          label="File Type Extension"
          margin="normal"
          name="fileTypeExtension"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.fileTypeExtension} // This value corresponds to the 'fileTypeExtension' field in formik.values
        />

              {/* <Box sx={{ mt: 2 }}>
                <CardActionArea>
                  <CardMedia
                    image={null}
                    sx={{
                      backgroundPosition: 'top',
                      height: 350
                    }}
                  />
                </CardActionArea>
              </Box> */}

        {formik.errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Button
            // disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            disabled={loading}
          >
            Add Blog
          </Button>
        </Box>
         {loading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <CircularProgress />
          </Box>
                )}
                {success &&
                  <Box sx={{ mt: 2 }}>
                    <Alert severity={"info"}>
            
                      <div>
                        <b> Blog added successfully </b>
                      </div>
             
                    </Alert>
                  </Box>
                }
        </form>
              </Container>
            </Card>
            </Box>
        </Container>
      </Box>
    </>
  );
};

BlogAdd.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default BlogAdd;

// {
//   "tItle": "string",
//   "fileContentBase64":"string",
//   "PostText":"string",
//   "fileTypeExtension":"string"
//   }