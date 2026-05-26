import React from 'react';

export interface LanDialMedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedThin: React.FC<LanDialMedThinProps>;
export default LanDialMedThin;
