import React from 'react';

export interface CoreHardDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHardDriveSolid: React.FC<CoreHardDriveSolidProps>;
export default CoreHardDriveSolid;
