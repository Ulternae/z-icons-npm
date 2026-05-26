import React from 'react';

export interface LanUsbDriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsbDriveThin: React.FC<LanUsbDriveThinProps>;
export default LanUsbDriveThin;
