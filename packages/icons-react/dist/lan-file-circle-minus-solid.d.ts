import React from 'react';

export interface LanFileCircleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleMinusSolid: React.FC<LanFileCircleMinusSolidProps>;
export default LanFileCircleMinusSolid;
