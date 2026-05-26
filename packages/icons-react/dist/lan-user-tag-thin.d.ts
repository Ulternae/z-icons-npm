import React from 'react';

export interface LanUserTagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTagThin: React.FC<LanUserTagThinProps>;
export default LanUserTagThin;
