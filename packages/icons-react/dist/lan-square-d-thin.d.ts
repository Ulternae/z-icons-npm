import React from 'react';

export interface LanSquareDThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDThin: React.FC<LanSquareDThinProps>;
export default LanSquareDThin;
