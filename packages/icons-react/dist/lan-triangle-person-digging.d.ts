import React from 'react';

export interface LanTrianglePersonDiggingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrianglePersonDigging: React.FC<LanTrianglePersonDiggingProps>;
export default LanTrianglePersonDigging;
