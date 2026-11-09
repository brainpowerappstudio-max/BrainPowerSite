// The owner confirmed full account-data deletion and a seven-day processing time.
// Set deletedData to an array of verified category labels. Check sign-in and
// account records, usage history, images, and other personal data for each app.
// List any retention exceptions as { category, purpose, period }.
// Set supportsDataOnlyDeletion to true or false once verified. Until then the
// page invites users to ask support about deleting specific data.
const standardPolicy = {
  deletedData: null,
  retainedData: [],
  processingTime: 'We process account deletion requests within 7 days once we have enough information to verify the request.',
  supportsDataOnlyDeletion: null,
};

export const apps = [
  {
    ...standardPolicy,
    slug: 'snake-identifier',
    displayName: 'Snake Identifier: Fast Scanner',
    packageId: 'com.brainpower.snakeidentifier',
  },
  {
    ...standardPolicy,
    slug: 'demucheck',
    displayName: 'Demumu: Are You Dead?',
    packageId: 'com.demucheck',
  },
  {
    ...standardPolicy,
    slug: 'mushroom-identifier',
    displayName: 'Mushroom Identifier: AI Scan',
    packageId: 'com.brainpower.mushroomidentifier',
  },
];
