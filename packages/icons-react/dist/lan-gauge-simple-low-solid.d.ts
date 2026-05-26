import React from 'react';

export interface LanGaugeSimpleLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleLowSolid: React.FC<LanGaugeSimpleLowSolidProps>;
export default LanGaugeSimpleLowSolid;
