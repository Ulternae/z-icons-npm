import React from 'react';

export interface LanUsbDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsbDrive: React.FC<LanUsbDriveProps>;
export default LanUsbDrive;
