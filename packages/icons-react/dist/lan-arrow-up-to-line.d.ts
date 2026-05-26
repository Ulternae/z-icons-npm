import React from 'react';

export interface LanArrowUpToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpToLine: React.FC<LanArrowUpToLineProps>;
export default LanArrowUpToLine;
