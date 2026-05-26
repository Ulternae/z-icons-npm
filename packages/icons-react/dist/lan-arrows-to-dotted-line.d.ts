import React from 'react';

export interface LanArrowsToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToDottedLine: React.FC<LanArrowsToDottedLineProps>;
export default LanArrowsToDottedLine;
