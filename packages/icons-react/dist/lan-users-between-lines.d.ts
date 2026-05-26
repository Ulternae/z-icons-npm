import React from 'react';

export interface LanUsersBetweenLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersBetweenLines: React.FC<LanUsersBetweenLinesProps>;
export default LanUsersBetweenLines;
