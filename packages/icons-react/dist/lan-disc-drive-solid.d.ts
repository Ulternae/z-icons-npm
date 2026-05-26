import React from 'react';

export interface LanDiscDriveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiscDriveSolid: React.FC<LanDiscDriveSolidProps>;
export default LanDiscDriveSolid;
