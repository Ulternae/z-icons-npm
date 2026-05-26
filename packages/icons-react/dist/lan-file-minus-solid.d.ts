import React from 'react';

export interface LanFileMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMinusSolid: React.FC<LanFileMinusSolidProps>;
export default LanFileMinusSolid;
