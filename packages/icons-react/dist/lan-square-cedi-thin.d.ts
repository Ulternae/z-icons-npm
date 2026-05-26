import React from 'react';

export interface LanSquareCediThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCediThin: React.FC<LanSquareCediThinProps>;
export default LanSquareCediThin;
