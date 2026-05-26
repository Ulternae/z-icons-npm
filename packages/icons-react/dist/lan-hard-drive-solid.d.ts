import React from 'react';

export interface LanHardDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardDriveSolid: React.FC<LanHardDriveSolidProps>;
export default LanHardDriveSolid;
