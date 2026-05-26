import React from 'react';

export interface LanHoseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoseSolid: React.FC<LanHoseSolidProps>;
export default LanHoseSolid;
