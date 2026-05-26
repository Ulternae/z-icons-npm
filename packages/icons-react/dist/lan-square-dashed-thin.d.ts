import React from 'react';

export interface LanSquareDashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedThin: React.FC<LanSquareDashedThinProps>;
export default LanSquareDashedThin;
