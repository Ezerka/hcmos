import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  FormControl,
  Select,
  Grid
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';
import axios from 'axios';
//Test Example

const ExamForm = props => {
  const { open, toggleDialog } = props;
  const initialFormData = {
    examType: 'mid',
    midType: 1,
    startDate: moment().toISOString(),
    semType: 1,
    endDate: moment()
      .add(3, 'days')
      .toISOString(),
    blocks: [],
    studentsYear: []
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleTheFormChange = event => {
    const object = { [event.target.name]: event.target.value };
    setFormData({ ...formData, ...object });
  };
  const handleTheNewExam = async () => {
    console.log('Uploading the data', formData);
    try {
      const response = await axios.post(
        'https://college-erp-ezerka.firebaseapp.com/api/v1/exams',
        formData
      );
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
    toggleDialog();
    setFormData({ ...initialFormData });
  };

  const handleTheDateChange = (date, name) => {
    const isoDate = moment(date).toISOString();
    const object = { [name]: isoDate };
    setFormData({ ...formData, ...object });
  };

  const yearOptions = [
    { title: 'First Year', year: 1 },
    { title: 'Second Year', year: 2 },
    { title: 'Third Year', year: 3 },
    { title: 'Fourth Year', year: 4 }
  ];
  const blockOptions = [
    { title: 'North Block', block: 'N' },
    { title: 'South Block', block: 'S' },
    { title: 'Central Block', block: 'C' },
    { title: 'East Block', block: 'E' }
  ];

  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">New Exam</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <div className="form">
          <div className="form__form-group">
            <span className="form__form-group-label typography-message">
              Exam Type
            </span>
            <div className="form__form-group-field">
              <FormControl size={'small'} variant="outlined" fullWidth>
                <Select
                  native
                  type="text"
                  name="examType"
                  required
                  value={formData.examType}
                  onChange={handleTheFormChange}
                >
                  <option value={'mid'}>Mid</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label typography-message">
              Type of Exam Number
            </span>
            <div className="form__form-group-field">
              <FormControl size={'small'} variant="outlined" fullWidth>
                <Select
                  native
                  type="text"
                  name="midType"
                  required
                  value={formData.midType}
                  onChange={handleTheFormChange}
                >
                  <option value={'1'}>1</option>
                  <option value={'2'}>2</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label typography-message">
              Type of Semester
            </span>
            <div className="form__form-group-field">
              <FormControl size={'small'} variant="outlined" fullWidth>
                <Select
                  native
                  type="text"
                  name="semType"
                  required
                  value={formData.semType}
                  onChange={handleTheFormChange}
                >
                  <option value={'1'}>First Semester</option>
                  <option value={'2'}>Second Semester</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid
              container
              direction={'row'}
              spacing={2}
              justify={'space-around'}
            >
              <Grid item xs={12} sm={6}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Start Date</span>
                  <div className="form__form-group-field">
                    <KeyboardDatePicker
                      required
                      fullWidth
                      inputVariant="outlined"
                      format="dd/MM/yyyy"
                      name="startDate"
                      InputAdornmentProps={{ position: 'start' }}
                      value={formData.startDate}
                      onChange={date => handleTheDateChange(date, 'startDate')}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="form__form-group">
                  <span className="form__form-group-label">End Date</span>
                  <div className="form__form-group-field priority">
                    <KeyboardDatePicker
                      required
                      inputVariant="outlined"
                      margin="none"
                      fullWidth
                      name="endDate"
                      format="dd/MM/yyyy"
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                      value={formData.endDate}
                      onChange={date => handleTheDateChange(date, 'endDate')}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>

          <div className="form__form-group">
            <span className="form__form-group-label">Student Year</span>
            <div className="form__form-group-field priority">
              <Autocomplete
                multiple
                id="fixed-tags-demo"
                options={yearOptions}
                onChange={(event, objects) => {
                  const yearsObjectArray = [];
                  objects.map(object => {
                    yearsObjectArray.push(object.year);
                  });
                  console.log(yearsObjectArray);
                  let updatedFormData = formData;
                  updatedFormData.studentsYear = yearsObjectArray;
                  setFormData(updatedFormData);
                }}
                size={'small'}
                fullWidth
                disableCloseOnSelect
                getOptionLabel={option => option.title}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip label={option.title} {...getTagProps({ index })} />
                  ))
                }
                style={{ width: '100%' }}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Year"
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Blocks For Exam</span>
            <div className="form__form-group-field priority">
              <Autocomplete
                multiple
                id="fixed-tags-demo"
                options={blockOptions}
                onChange={(event, objects) => {
                  const blocksObjectArray = [];
                  objects.map(object => {
                    blocksObjectArray.push(object.block);
                  });
                  console.log(blocksObjectArray);
                  let updatedFormData = formData;
                  updatedFormData.blocks = blocksObjectArray;
                  setFormData(updatedFormData);
                }}
                size={'small'}
                fullWidth
                disableCloseOnSelect
                getOptionLabel={option => option.title}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip label={option.title} {...getTagProps({ index })} />
                  ))
                }
                style={{ width: '100%' }}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Block"
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="primary" onClick={handleTheNewExam}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExamForm;
