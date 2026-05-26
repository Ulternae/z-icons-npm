import React from 'react';

export interface LanArrowsToDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToDotThin: React.FC<LanArrowsToDotThinProps>;
export default LanArrowsToDotThin;
