import React from 'react';

export interface LanDialMedHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMedHighThin: React.FC<LanDialMedHighThinProps>;
export default LanDialMedHighThin;
