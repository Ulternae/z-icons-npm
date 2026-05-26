import React from 'react';

export interface LanUpToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpToDottedLine: React.FC<LanUpToDottedLineProps>;
export default LanUpToDottedLine;
