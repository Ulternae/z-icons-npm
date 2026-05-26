import React from 'react';

export interface LanUpFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpFromDottedLine: React.FC<LanUpFromDottedLineProps>;
export default LanUpFromDottedLine;
