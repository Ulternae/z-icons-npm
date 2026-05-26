import React from 'react';

export interface LanTimerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimerSolid: React.FC<LanTimerSolidProps>;
export default LanTimerSolid;
