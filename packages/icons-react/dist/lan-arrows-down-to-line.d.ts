import React from 'react';

export interface LanArrowsDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsDownToLine: React.FC<LanArrowsDownToLineProps>;
export default LanArrowsDownToLine;
