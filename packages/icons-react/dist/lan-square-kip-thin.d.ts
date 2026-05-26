import React from 'react';

export interface LanSquareKipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKipThin: React.FC<LanSquareKipThinProps>;
export default LanSquareKipThin;
