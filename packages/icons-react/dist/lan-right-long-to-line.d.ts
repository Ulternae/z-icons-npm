import React from 'react';

export interface LanRightLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRightLongToLine: React.FC<LanRightLongToLineProps>;
export default LanRightLongToLine;
