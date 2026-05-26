import React from 'react';

export interface LanLeftFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeftFromDottedLine: React.FC<LanLeftFromDottedLineProps>;
export default LanLeftFromDottedLine;
