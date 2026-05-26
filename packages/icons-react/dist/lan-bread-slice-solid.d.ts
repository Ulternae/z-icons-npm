import React from 'react';

export interface LanBreadSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadSliceSolid: React.FC<LanBreadSliceSolidProps>;
export default LanBreadSliceSolid;
