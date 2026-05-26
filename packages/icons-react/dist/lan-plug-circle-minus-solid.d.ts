import React from 'react';

export interface LanPlugCircleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugCircleMinusSolid: React.FC<LanPlugCircleMinusSolidProps>;
export default LanPlugCircleMinusSolid;
