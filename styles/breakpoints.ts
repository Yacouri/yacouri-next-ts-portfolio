const device = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

export const breakpoints = {
  sm: `@media (max-width:${device.sm})`,
  md: `@media (max-width:${device.md})`,
  lg: `@media (max-width:${device.lg})`,
  xl: `@media (max-width:${device.xl})`,
  xxl: `@media (max-width:${device.xxl})`
};
