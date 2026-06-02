# Supabase Form Setup

Project created for this website:

- Organization: sdresortmarriagegarden's Org
- Project name: sd-resort-marriage-garden-website
- Project ref: hhvcxxplbcskbowdisms
- Region: ap-south-1
- Form table: public.event_enquiries

The website booking form inserts rows into `public.event_enquiries` through the Supabase REST API.

Security notes:

- Row Level Security is enabled on `public.event_enquiries`.
- Anonymous visitors can only insert enquiry records.
- Anonymous visitors cannot select, update, or delete enquiry records.
- Do not add Supabase service role keys, secret keys, or personal access tokens to the website files.
