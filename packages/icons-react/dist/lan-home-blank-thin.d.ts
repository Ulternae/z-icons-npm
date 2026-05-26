import React from 'react';

export interface LanHomeBlankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeBlankThin: React.FC<LanHomeBlankThinProps>;
export default LanHomeBlankThin;
