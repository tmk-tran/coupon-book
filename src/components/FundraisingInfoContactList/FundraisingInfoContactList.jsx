import { List, ListItem, ListItemIcon } from "@mui/material";
// ~~~~~~~~~~ Icons ~~~~~~~~~~
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { styleIconColor } from "../../hooks/helpers";

export default function FundraisingInfoContactList() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemIcon>
          <PhoneIcon style={styleIconColor} />
        </ListItemIcon>
        (701) 566-0527
      </ListItem>
      <br />
      <ListItem disablePadding>
        <ListItemIcon>
          <EmailIcon style={styleIconColor} />
        </ListItemIcon>
        <a
          href="mailto:wendy@thepreferredsavingsguide.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          wendy@thepreferredsavingsguide.com
        </a>
      </ListItem>
    </List>
  );
}
