"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/postcodecookie.ts
  var postcodecookie = () => {
    $(document).ready(function() {
      function saveToCookieConsent() {
        var inputValue = $('[post="code"]').val();
        Cookies.set("cookieName", inputValue, { expires: 365, path: "/" });
      }
      $('[data-form="submit-btn"]').click(function() {
        saveToCookieConsent();
      });
    });
  };

  // src/utils/airtable.ts
  var airtable = () => {
    const postcodecookies = postcodecookie();
    const token = "patbind6rCod8yplJ.498983e06b091311d33044ed27b2585e5de01fca6c7dcb768573c3f615167c9c";
    const baseUrl = "https://api.airtable.com/v0";
    const baseId = "app4yR7Au4zhrkMxV";
    const searchTerm = Cookies.get("cookieName");
    const searchTermsubtract = searchTerm.substring(0, 3);
    const tableName = "betterboiler";
    const params = {
      filterByFormula: `SEARCH('${searchTermsubtract}', {filterpostalcode})`,
      maxRecords: 1
      // Limit the maximum number of records to 3
    };
    const url = `${baseUrl}/${baseId}/${tableName}?${new URLSearchParams(params)}`;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => response.json()).then((data) => {
      data.records.forEach((record) => {
        const addressAttribute = '[profile="address"]';
        const nameAttribute = '[profile="name"]';
        const fieldName = record.fields.Name;
        const address = record.fields.Address;
        $('[profile="name"]').text(fieldName);
        $('[profile="address"]').text(address);
        console.log(record.fields.postalcode);
      });
    }).catch((error) => {
      console.error(error);
    });
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(async () => {
  });
  postcodecookie();
  airtable();
})();
//# sourceMappingURL=index.js.map
