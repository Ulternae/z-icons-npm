import React from 'react';

export interface LanUserMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMinusSolid: React.FC<LanUserMinusSolidProps>;
export default LanUserMinusSolid;
