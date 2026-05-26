import React from 'react';

export interface LanUserVisorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVisorThin: React.FC<LanUserVisorThinProps>;
export default LanUserVisorThin;
