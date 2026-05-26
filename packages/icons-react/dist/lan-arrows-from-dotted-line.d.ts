import React from 'react';

export interface LanArrowsFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsFromDottedLine: React.FC<LanArrowsFromDottedLineProps>;
export default LanArrowsFromDottedLine;
