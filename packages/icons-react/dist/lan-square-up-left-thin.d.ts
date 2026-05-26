import React from 'react';

export interface LanSquareUpLeftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUpLeftThin: React.FC<LanSquareUpLeftThinProps>;
export default LanSquareUpLeftThin;
