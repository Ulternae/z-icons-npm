import React from 'react';

export interface LanArrowsLeftRightToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsLeftRightToLine: React.FC<LanArrowsLeftRightToLineProps>;
export default LanArrowsLeftRightToLine;
