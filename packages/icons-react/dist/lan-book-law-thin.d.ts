import React from 'react';

export interface LanBookLawThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookLawThin: React.FC<LanBookLawThinProps>;
export default LanBookLawThin;
