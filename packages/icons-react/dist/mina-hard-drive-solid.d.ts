import React from 'react';

export interface MinaHardDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHardDriveSolid: React.FC<MinaHardDriveSolidProps>;
export default MinaHardDriveSolid;
