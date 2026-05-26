import React from 'react';

export interface LanSquareChfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareChfThin: React.FC<LanSquareChfThinProps>;
export default LanSquareChfThin;
