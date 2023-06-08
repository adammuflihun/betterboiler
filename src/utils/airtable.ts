import { postcodecookie, postcodecookie } from '$utils/postcodecookie';

export const airtable = () => {
  const postcodecookies = postcodecookie();
  const token =
    'patbind6rCod8yplJ.498983e06b091311d33044ed27b2585e5de01fca6c7dcb768573c3f615167c9c';
  const baseUrl = 'https://api.airtable.com/v0';
  const baseId = 'app4yR7Au4zhrkMxV'; // Update with your base ID

  // Specify the table and any desired parameters

  const searchTerm = Cookies.get('cookieName');
  const searchTermsubtract = searchTerm.substring(0, 3);
  //   $('[print="postalcode"]').text(searchTerm);

  const tableName = 'betterboiler';
  const params = {
    filterByFormula: `SEARCH('${searchTermsubtract}', {filterpostalcode})`,
    maxRecords: 1, // Limit the maximum number of records to 3
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
        const addressAttribute = '[profile="address"]';
        const nameAttribute = '[profile="name"]';
        // console.log(record.fields.filterpostalcode);
        const fieldName = record.fields.Name;
        const address = record.fields.Address;
        $('[profile="name"]').text(fieldName);
        $('[profile="address"]').text(address);
        // console.log(record.fields.postalcode);
      });
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};
