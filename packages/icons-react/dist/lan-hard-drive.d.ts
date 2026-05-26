import React from 'react';

export interface LanHardDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardDrive: React.FC<LanHardDriveProps>;
export default LanHardDrive;
