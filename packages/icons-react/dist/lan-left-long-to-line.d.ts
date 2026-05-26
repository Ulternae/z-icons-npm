import React from 'react';

export interface LanLeftLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeftLongToLine: React.FC<LanLeftLongToLineProps>;
export default LanLeftLongToLine;
