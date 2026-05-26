import React from 'react';

export interface LanStarSharpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarSharp: React.FC<LanStarSharpProps>;
export default LanStarSharp;
