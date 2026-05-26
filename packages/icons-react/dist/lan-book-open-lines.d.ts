import React from 'react';

export interface LanBookOpenLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenLines: React.FC<LanBookOpenLinesProps>;
export default LanBookOpenLines;
