import React from 'react';

export interface LanUsbDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsbDriveSolid: React.FC<LanUsbDriveSolidProps>;
export default LanUsbDriveSolid;
