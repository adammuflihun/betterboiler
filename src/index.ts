import { airtable } from '$utils/airtable';
import { postcodecookie } from '$utils/postcodecookie';

window.Webflow ||= [];
window.Webflow.push(async () => {});

postcodecookie();
airtable();
