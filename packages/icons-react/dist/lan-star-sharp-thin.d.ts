import React from 'react';

export interface LanStarSharpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharpThin: React.FC<LanStarSharpThinProps>;
export default LanStarSharpThin;
