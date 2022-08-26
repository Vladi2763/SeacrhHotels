import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useSelector } from "react-redux";

import { MainReducer } from "../../../store/mainReducer";

const MaterialUIPickers: React.FC<{ setDate: (arg: Date | null) => void }> = (
  props
) => {
  const checkIn = new Date(
    useSelector((state: MainReducer) => state.hotels.checkIn)
  ).toISOString();

  const [value, setValue] = React.useState<Date | null>(new Date(checkIn));

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
    props.setDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          inputFormat="dd.MM.yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default MaterialUIPickers;
