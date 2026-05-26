import React from 'react';

export interface LanGaugeSimpleMinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMinSolid: React.FC<LanGaugeSimpleMinSolidProps>;
export default LanGaugeSimpleMinSolid;
