import React from 'react';

export interface LanSquareCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCodeThin: React.FC<LanSquareCodeThinProps>;
export default LanSquareCodeThin;
