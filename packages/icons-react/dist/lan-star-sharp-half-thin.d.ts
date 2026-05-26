import React from 'react';

export interface LanStarSharpHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharpHalfThin: React.FC<LanStarSharpHalfThinProps>;
export default LanStarSharpHalfThin;
