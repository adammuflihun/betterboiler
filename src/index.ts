import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(async () => {});

// greetUser(name);

const token = 'patbind6rCod8yplJ.498983e06b091311d33044ed27b2585e5de01fca6c7dcb768573c3f615167c9c';
const baseUrl = 'https://api.airtable.com/v0';
const baseId = 'app4yR7Au4zhrkMxV'; // Update with your base ID

// Specify the table and any desired parameters
const tableName = 'betterboiler';
const params = {
  filterByFormula: "SEARCH('MK4', {filterpostalcode})",
  maxRecords: 3, // Limit the maximum number of records to 3
};

// Construct the URL
const url = `${baseUrl}/${baseId}/${tableName}?${new URLSearchParams(params)}`;

// Fetch the data
fetch(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Process the retrieved data
    data.records.forEach((record) => {
      console.log(record.fields.filterpostalcode);
      console.log(record.fields.Name);
      console.log(record.fields.Address);
    });
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });
