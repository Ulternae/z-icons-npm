import React from 'react';

export interface LanArrowLeftToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowLeftToLine: React.FC<LanArrowLeftToLineProps>;
export default LanArrowLeftToLine;
