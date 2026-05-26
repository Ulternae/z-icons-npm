import React from 'react';

export interface LanSquareQThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQThin: React.FC<LanSquareQThinProps>;
export default LanSquareQThin;
