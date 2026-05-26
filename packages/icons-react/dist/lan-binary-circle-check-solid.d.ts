import React from 'react';

export interface LanBinaryCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinaryCircleCheckSolid: React.FC<LanBinaryCircleCheckSolidProps>;
export default LanBinaryCircleCheckSolid;
