import React from 'react';

export interface LanArrowsToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToLine: React.FC<LanArrowsToLineProps>;
export default LanArrowsToLine;
