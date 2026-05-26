import React from 'react';

export interface LanGaugeCircleBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeCircleBoltSolid: React.FC<LanGaugeCircleBoltSolidProps>;
export default LanGaugeCircleBoltSolid;
