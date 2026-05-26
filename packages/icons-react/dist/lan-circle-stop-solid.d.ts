import React from 'react';

export interface LanCircleStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStopSolid: React.FC<LanCircleStopSolidProps>;
export default LanCircleStopSolid;
