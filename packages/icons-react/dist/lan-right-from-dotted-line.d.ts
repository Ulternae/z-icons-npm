import React from 'react';

export interface LanRightFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightFromDottedLine: React.FC<LanRightFromDottedLineProps>;
export default LanRightFromDottedLine;
