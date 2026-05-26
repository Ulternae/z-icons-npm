import React from 'react';

export interface LanDownToDottedLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToDottedLine: React.FC<LanDownToDottedLineProps>;
export default LanDownToDottedLine;
