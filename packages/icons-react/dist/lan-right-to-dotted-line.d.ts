import React from 'react';

export interface LanRightToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightToDottedLine: React.FC<LanRightToDottedLineProps>;
export default LanRightToDottedLine;
