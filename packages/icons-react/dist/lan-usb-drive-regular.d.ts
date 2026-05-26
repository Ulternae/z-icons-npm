import React from 'react';

export interface LanUsbDriveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsbDriveRegular: React.FC<LanUsbDriveRegularProps>;
export default LanUsbDriveRegular;
