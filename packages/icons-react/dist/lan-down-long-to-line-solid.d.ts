import React from 'react';

export interface LanDownLongToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLongToLineSolid: React.FC<LanDownLongToLineSolidProps>;
export default LanDownLongToLineSolid;
