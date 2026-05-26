import React from 'react';

export interface LanDialMedLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedLow: React.FC<LanDialMedLowProps>;
export default LanDialMedLow;
