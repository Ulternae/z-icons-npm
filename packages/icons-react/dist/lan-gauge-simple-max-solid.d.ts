import React from 'react';

export interface LanGaugeSimpleMaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMaxSolid: React.FC<LanGaugeSimpleMaxSolidProps>;
export default LanGaugeSimpleMaxSolid;
