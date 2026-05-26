import React from 'react';

export interface LanDownLongToLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLongToLine: React.FC<LanDownLongToLineProps>;
export default LanDownLongToLine;
