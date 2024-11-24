import { data } from "@/assests/data";
import { COLORS } from "@/utils/colors";
import { FABRIC_NAME } from "@/utils/enum";
import { roboto } from "@/utils/fonts";
import { ErrorState, State } from "@/utils/types";
import { fabricValidation } from "@/utils/validation";
import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  FormHelperText,
  Grid2,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface OptionType {
  label: string;
  value: string;
}

const FiberForm = () => {
  const [state, setState] = useState<State>({
    startDate: "",
    endDate: "",
    production: "",
    order: "",
    china: false,
    chinaFabrics: [],
    fabricName: [],
    majorFabric: "",
    trims: [],
    accessories: [],
  });
  const [error, setError] = useState<ErrorState>({
    startDate: "",
    endDate: "",
    production: "",
    order: "",
    china: "",
    chinaFabrics: "",
    fabricName: "",
    majorFabric: "",
    trims: "",
    accessories: "",
  });
  const [startDate, setStartDate] = useState<Moment | undefined>(undefined);
  const [endDate, setEndDate] = useState<Moment | undefined>(undefined);
  const [chinaFabric, setChinaFabric] = useState<OptionType[]>([]);
  const [trims, setTrims] = useState<OptionType[]>([]);
  const [accessories, setAccessories] = useState<OptionType[]>([]);
  const [majorFabric, setMajorFabric] = useState<OptionType | null>(null);

  const [fibreName, setFibreName] = useState<OptionType[]>([]);

  const router = useRouter();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const fibreHandler = (e: React.SyntheticEvent, newValue: OptionType[]) => {
    setFibreName(newValue);

    if (newValue) {
      setState({
        ...state,
        fabricName: newValue.map((val) => val.label),
      });
    }
  };

  const startDateHandler = (newDate: Moment | null) => {
    setStartDate(newDate || undefined);
    const validDate = moment(newDate).isValid();

    if (validDate) {
      setState({ ...state, startDate: moment(newDate).format("DD-MM-YYYY") });
    }
  };

  const endDateHandler = (newDate: Moment | null) => {
    setEndDate(newDate || undefined);
    const validDate = moment(newDate).isValid();

    if (validDate) {
      setState({ ...state, endDate: moment(newDate).format("DD-MM-YYYY") });
    }
  };

  const chinaRadioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, china: e.target.value === "yes" });
  };

  const chinaFabricsHandler = (
    e: React.SyntheticEvent,
    newValue: OptionType[]
  ) => {
    setChinaFabric(newValue);
    if (newValue) {
      setState({ ...state, chinaFabrics: newValue.map((val) => val.label) });
    }
  };
  const MajorFabricHandler = (
    e: React.SyntheticEvent,
    newValue: OptionType | null
  ) => {
    setMajorFabric(newValue);

    if (newValue) {
      setState({ ...state, majorFabric: newValue.label });
    } else {
      setState({ ...state, majorFabric: "" });
    }
  };

  const trimChangeHandler = (
    e: React.SyntheticEvent,
    newValue: OptionType[]
  ) => {
    setTrims(newValue);
    if (newValue) {
      setState({ ...state, trims: newValue.map((val) => val.label) });
    }
  };
  const accessoriesChangeHandler = (
    e: React.SyntheticEvent,
    newValue: OptionType[]
  ) => {
    setAccessories(newValue);
    if (newValue) {
      setState({ ...state, accessories: newValue.map((val) => val.label) });
    }
  };

  const submitHandler = () => {
    const validationErrors = fabricValidation(state);
    setError(validationErrors);

    const hasErrors = Object.values(validationErrors).some((msg) => msg !== "");

    if (!hasErrors) {
      localStorage.setItem("data", JSON.stringify(state));
      router.push("/fabrics");
    }
  };
  const majorFabricOptions = [{ label: "None", value: "none" }, ...fibreName];

  return (
    <div>
      <Grid2 container spacing={4} alignItems={"center"}>
        <Grid2 size={6}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Start Date*"
              sx={{ width: "100%" }}
              minDate={moment()}
              onChange={startDateHandler}
              format="DD/MM/YYYY"
              slotProps={{
                textField: {
                  error: Boolean(error.startDate),
                  helperText: error.startDate,
                },
              }}
            />
          </LocalizationProvider>
        </Grid2>
        <Grid2 size={6}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="End Date*"
              sx={{ width: "100%" }}
              minDate={startDate}
              onChange={endDateHandler}
              format="DD/MM/YYYY"
              slotProps={{
                textField: {
                  error: Boolean(error.endDate),
                  helperText: error.endDate,
                },
              }}
              value={endDate}
            />
          </LocalizationProvider>
        </Grid2>
        <Grid2 size={6}>
          <TextField
            fullWidth
            label="Production Per Day*"
            type="number"
            id="production"
            onChange={inputHandler}
            error={Boolean(error.production)}
            helperText={error.production}
          />
        </Grid2>
        <Grid2 size={6}>
          <TextField
            fullWidth
            label="Total Order*"
            type="number"
            id="order"
            onChange={inputHandler}
            error={Boolean(error.order)}
            helperText={error.order}
          />
        </Grid2>
        <Grid2 size={12}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                label="Fabric Name*"
                {...params}
                error={Boolean(error.fabricName)}
                helperText={error.fabricName}
              />
            )}
            multiple
            options={data.fabricList as OptionType[]}
            getOptionLabel={(option: OptionType) => option.label}
            renderOption={(props, option: OptionType) => (
              <Box {...props} component="li">
                <Typography fontSize={14} sx={{ fontFamily: roboto.style }}>
                  {option.label}
                </Typography>
              </Box>
            )}
            onChange={fibreHandler}
            filterSelectedOptions
            value={fibreName}
          />
        </Grid2>

        <Grid2 size={6}>
          <Typography fontSize={14} sx={{ fontFamily: roboto.style }}>
            Is China Fabric Present ?
          </Typography>
        </Grid2>
        <Grid2 size={6}>
          <RadioGroup row onChange={chinaRadioHandler}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          {error.china && (
            <FormHelperText sx={{ fontSize: 12, color: COLORS.DANGER }}>
              {error.china}
            </FormHelperText>
          )}
        </Grid2>
        {state.china && (
          <Grid2 size={12}>
            <Autocomplete
              renderInput={(params) => (
                <TextField
                  label="Choose China Fabrics*"
                  {...params}
                  error={Boolean(error.chinaFabrics)}
                  helperText={error.chinaFabrics}
                />
              )}
              value={chinaFabric}
              options={fibreName as OptionType[]}
              getOptionLabel={(option: OptionType) => option.label}
              renderOption={(props, option: OptionType) => (
                <Box {...props} component={"li"}>
                  <Typography fontSize={14} sx={{ fontFamily: roboto.style }}>
                    {option.label}
                  </Typography>
                </Box>
              )}
              onChange={chinaFabricsHandler}
              multiple
              filterSelectedOptions
            />
          </Grid2>
        )}
        <Grid2 size={12}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                label="Choose Major Fabrics*"
                {...params}
                error={Boolean(error.majorFabric)}
                helperText={error.majorFabric}
              />
            )}
            onChange={MajorFabricHandler}
            value={majorFabric}
            options={majorFabricOptions as OptionType[]}
            getOptionLabel={(option: OptionType) => option.label}
            renderOption={(props, option: OptionType) => (
              <Box {...props} component={"li"}>
                <Typography fontSize={14} sx={{ fontFamily: roboto.style }}>
                  {option.label}
                </Typography>
              </Box>
            )}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
          
          />
        </Grid2>
        <Grid2 size={12}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                label="Trims*"
                {...params}
                error={Boolean(error.trims)}
                helperText={error.trims}
              />
            )}
            options={data.trims as OptionType[]}
            getOptionLabel={(option: OptionType) => option.label}
            renderOption={(props, option: OptionType) => (
              <Box {...props} component={"li"}>
                <Typography fontSize={14} sx={{ fontFamily: roboto.style }}>
                  {option.label}
                </Typography>
              </Box>
            )}
            multiple
            onChange={trimChangeHandler}
            value={trims}
            filterSelectedOptions
          />
        </Grid2>
        <Grid2 size={12}>
          <Autocomplete
            renderInput={(params) => (
              <TextField
                label="Accessories*"
                {...params}
                error={Boolean(error.accessories)}
                helperText={error.accessories}
              />
            )}
            options={data.accessories as OptionType[]}
            getOptionLabel={(option: OptionType) => option.label}
            renderOption={(props, option: OptionType) => (
              <Box {...props} component={"li"}>
                <Typography fontSize={14} sx={{ fontFamily: roboto.style }}>
                  {option.label}
                </Typography>
              </Box>
            )}
            multiple
            onChange={accessoriesChangeHandler}
            value={accessories}
            filterSelectedOptions
          />
        </Grid2>
        <Grid2 size={12}>
          <Button variant="contained" fullWidth onClick={submitHandler}>
            Continue
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default FiberForm;
