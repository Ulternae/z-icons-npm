import React from 'react';

export interface LanSquareManatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareManatThin: React.FC<LanSquareManatThinProps>;
export default LanSquareManatThin;
