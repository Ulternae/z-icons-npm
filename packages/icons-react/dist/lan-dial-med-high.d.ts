import React from 'react';

export interface LanDialMedHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedHigh: React.FC<LanDialMedHighProps>;
export default LanDialMedHigh;
