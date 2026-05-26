import React from 'react';

export interface LanSquareStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareStarThin: React.FC<LanSquareStarThinProps>;
export default LanSquareStarThin;
