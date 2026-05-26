import React from 'react';

export interface LanArrowRightToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowRightToLine: React.FC<LanArrowRightToLineProps>;
export default LanArrowRightToLine;
