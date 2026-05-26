import React from 'react';

export interface LanSquareAmpersandThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAmpersandThin: React.FC<LanSquareAmpersandThinProps>;
export default LanSquareAmpersandThin;
