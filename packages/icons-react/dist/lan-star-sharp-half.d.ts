import React from 'react';

export interface LanStarSharpHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharpHalf: React.FC<LanStarSharpHalfProps>;
export default LanStarSharpHalf;
