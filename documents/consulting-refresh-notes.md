# Consulting refresh — implementation notes

Light identity: white (#ffffff), charcoal (#202c23), signature logo green (#67ba43). Night mode is optional and saved only after a visitor chooses it.

## Business cards
Use white stock, charcoal lettering, and a signature green rule. Keep the name, technology consulting description, contact details, and website prominent. A future booking QR code should point to alvanprice.com/consultation/ so the scheduling provider can change without reprinting. Existing card artwork has independent edits and has not been overwritten.

## Calendar connection pending
Create a 25-minute introductory event in Calendly, connect the intended Google Calendar for availability and invitations, and configure working hours, buffers, notice, meeting location, reminders, and rescheduling. Collect name, email, and a short description of the decision or problem. Replace the explicit interim email section only after the real booking link works. Verify a complete booking and cancellation before publishing it as available.

## Privacy review before publication
The draft pages describe the code inspected here, which has no analytics, advertising scripts, or scheduler embed. Confirm production hosting logs and retention, email provider and retention practices, business contact details, applicable visitor jurisdictions, and any existing infrastructure-level trackers before treating the notice as complete. Revisit the notice when scheduling or analytics is added. These implementation changes do not certify legal compliance.

## Hosting
Existing deployment is DigitalOcean. This revision has not been published to alvanprice.com or migrated to a different host.
