import React from 'react';

export interface LanSquareFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFullThin: React.FC<LanSquareFullThinProps>;
export default LanSquareFullThin;
