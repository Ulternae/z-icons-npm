import React from 'react';

export interface LanLeftToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeftToDottedLine: React.FC<LanLeftToDottedLineProps>;
export default LanLeftToDottedLine;
