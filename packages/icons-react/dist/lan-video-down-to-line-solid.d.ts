import React from 'react';

export interface LanVideoDownToLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoDownToLineSolid: React.FC<LanVideoDownToLineSolidProps>;
export default LanVideoDownToLineSolid;
