import React from 'react';

export interface LanBringForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBringForwardSolid: React.FC<LanBringForwardSolidProps>;
export default LanBringForwardSolid;
