import React from 'react';

export interface LanScrollTorahSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScrollTorahSolid: React.FC<LanScrollTorahSolidProps>;
export default LanScrollTorahSolid;
