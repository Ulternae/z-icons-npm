import React from 'react';

export interface LanGaugeSimpleMedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGaugeSimpleMedSolid: React.FC<LanGaugeSimpleMedSolidProps>;
export default LanGaugeSimpleMedSolid;
