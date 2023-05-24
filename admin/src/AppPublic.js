import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./components/ForgotPassword"
import SnackBar from "./components/library/SnackBar"
import LoginForm from "./components/LoginForm"
import ResetPassword from "./components/ResetPassword"

function AppPublic() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
      <SnackBar />
      <Routes>
          <Route path="/admin/signin" Component={LoginForm} />
          <Route path="/admin/forgot-password" Component={ForgotPassword} />
          {/* <Route path="/admin/reset-password/" Component={ResetPassword} /> */}
          <Route path="/admin/reset-password/:resetCode" Component={ResetPassword} />
      </Routes>
    </Box>
  )
}

export default AppPublic