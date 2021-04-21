import React from 'react';
import PropTypes from 'prop-types';
import EnhancedTable from './table';
import SearchIcon from "@material-ui/icons/Search";
import {
   AppBar, Box, TextField, Typography, Tabs, Tab, InputLabel, Select, MenuItem, InputAdornment
} from "@material-ui/core";
import useStyles from "./styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function dashProps(index) {
  return {
    id: `simple-tab-${index}`,'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearch] = React.useState('');

  const handleSearchTextChange = (e) => {
    setSearch(e.target.value);
  }

  const [priority, setPriority] = React.useState('');
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  let [searchResults, setsearchResults] = React.useState([]);
  const sortDataByKey = (arr, key, sortType = 'ASC') => {
    return arr.sort(function (a, b) {
      if (a[key].toLowerCase() < b[key].toLowerCase())
        return (sortType == 'ASC') ? -1 : 1;
      if (a[key].toLowerCase() > b[key].toLowerCase())
        return (sortType == 'ASC') ? 1 : -1;
      return 0;
    })
  }
  React.useEffect(() => {
    let results = [];
    if (searchTerm != "") {
      results = props.addedRows.filter(todo =>
        (todo.summary.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    setsearchResults(results);
  }, [searchTerm]);
  React.useEffect(() => {
    let results = [];
    if (priority == "Priority") {
      results = sortDataByKey(props.addedRows, 'priority');
    } else if (priority == "Created On") {
      results = sortDataByKey(props.addedRows, 'createdOn');
    } else if (priority == "Pending On") {
      results = sortDataByKey(props.addedRows, 'dueDate');
    }

    setsearchResults(results);
  }, [priority])
  var addedTodoRows = searchResults.length > 0 ? searchResults : props.addedRows
  console.log(addedTodoRows, "added")
  let completedRows = addedTodoRows.filter(function (e) {
    return e.todoStateCompleted == true;
  });
  let pendingdRows = addedTodoRows.filter(function (e) {
    return e.todoStateCompleted == false;
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      
        <div className={classes.display}>
          <InputLabel className={classes.selectPadding} id="demo-simple-select-label">Group By:</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            onChange={(e) => handlePriorityChange(e)}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Created On'}>Created On</MenuItem>
            <MenuItem value={'Pending On'}>Pending On</MenuItem>
            <MenuItem value={'Priority'}>Priority</MenuItem>
          </Select>
        <div className={classes.display}>
          <TextField
            style={{right: '-300%'}}
            value={searchTerm}
            type="search"
            variant="outlined"
            margin="normal"
            placeholder="Search"
            onChange={(e) => handleSearchTextChange(e)}
            InputProps={{
              endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
            }}
          />
        </div>
      </div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Tasks" {...dashProps(0)} />
          <Tab label="Pending" {...dashProps(1)} />
          <Tab label="Completed" {...dashProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        <EnhancedTable addedTodos={addedTodoRows} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EnhancedTable addedTodos={pendingdRows} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {completedRows.length > 0 ?
          <EnhancedTable addedTodos={completedRows} />
          : null
        }
      </TabPanel>
    </div>
  );
}