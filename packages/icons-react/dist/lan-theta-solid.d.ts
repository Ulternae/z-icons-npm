import React from 'react';

export interface LanThetaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThetaSolid: React.FC<LanThetaSolidProps>;
export default LanThetaSolid;
