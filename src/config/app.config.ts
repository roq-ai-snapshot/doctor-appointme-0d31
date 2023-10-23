interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Patient', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read clinic information',
    'Read patient information',
    'Read healthcare provider information',
  ],
  ownerAbilities: ['Manage user data', 'Manage clinic data', 'Manage patient data', 'Manage healthcare provider data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/2b4acddd-bd99-4809-9e6e-fa17c90a7f4b',
};
