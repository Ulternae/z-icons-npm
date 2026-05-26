import React from 'react';

export interface LanScooterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScooterSolid: React.FC<LanScooterSolidProps>;
export default LanScooterSolid;
