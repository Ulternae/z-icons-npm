import React from 'react';

export interface LanPersonSkiLiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiLift: React.FC<LanPersonSkiLiftProps>;
export default LanPersonSkiLift;
