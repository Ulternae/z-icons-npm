import React from 'react';

export interface LanGripLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGripLines: React.FC<LanGripLinesProps>;
export default LanGripLines;
