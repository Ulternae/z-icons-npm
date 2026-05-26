import React from 'react';

export interface LanSquareCentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCentThin: React.FC<LanSquareCentThinProps>;
export default LanSquareCentThin;
