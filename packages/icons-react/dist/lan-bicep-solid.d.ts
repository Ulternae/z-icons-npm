import React from 'react';

export interface LanBicepSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicepSolid: React.FC<LanBicepSolidProps>;
export default LanBicepSolid;
