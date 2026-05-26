import React from 'react';

export interface LanPersonCircleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleMinusSolid: React.FC<LanPersonCircleMinusSolidProps>;
export default LanPersonCircleMinusSolid;
