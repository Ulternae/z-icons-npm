import React from 'react';

export interface LanDownFromDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownFromDottedLine: React.FC<LanDownFromDottedLineProps>;
export default LanDownFromDottedLine;
