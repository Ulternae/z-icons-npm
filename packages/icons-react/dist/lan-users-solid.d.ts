import React from 'react';

export interface LanUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersSolid: React.FC<LanUsersSolidProps>;
export default LanUsersSolid;
