import React from 'react';

export interface LanSquarePThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePThin: React.FC<LanSquarePThinProps>;
export default LanSquarePThin;
