import React from 'react';

export interface LanUpLongToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpLongToLineSolid: React.FC<LanUpLongToLineSolidProps>;
export default LanUpLongToLineSolid;
