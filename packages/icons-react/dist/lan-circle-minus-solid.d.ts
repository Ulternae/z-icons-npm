import React from 'react';

export interface LanCircleMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMinusSolid: React.FC<LanCircleMinusSolidProps>;
export default LanCircleMinusSolid;
