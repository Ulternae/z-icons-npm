import React from 'react';

export interface LanArrowDownToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowDownToLine: React.FC<LanArrowDownToLineProps>;
export default LanArrowDownToLine;
