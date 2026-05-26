import React from 'react';

export interface LanArrowsUpToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsUpToLine: React.FC<LanArrowsUpToLineProps>;
export default LanArrowsUpToLine;
