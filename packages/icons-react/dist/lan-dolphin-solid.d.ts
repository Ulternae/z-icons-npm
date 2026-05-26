import React from 'react';

export interface LanDolphinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDolphinSolid: React.FC<LanDolphinSolidProps>;
export default LanDolphinSolid;
