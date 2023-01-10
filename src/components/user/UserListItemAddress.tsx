import { Box, Typography } from "@mui/material";
import { IUserAddress } from "../../types/user-types";

interface Props {
  address: IUserAddress;
}
const UserListItemAddress = ({ address }: Props) => {
  
  return (
    <Box sx={{ borderTop: "3px solid green", borderBottom: "3px solid red" }}>
      <Typography sx={{ color: (theme) => theme.palette.primary.dark }}>
        {address.city}
      </Typography>
      <Typography>{address.street}</Typography>
      <Typography>{address.suite}</Typography>
    </Box>
  );
};

export default UserListItemAddress;
