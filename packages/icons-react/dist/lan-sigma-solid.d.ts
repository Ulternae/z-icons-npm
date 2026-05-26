import React from 'react';

export interface LanSigmaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSigmaSolid: React.FC<LanSigmaSolidProps>;
export default LanSigmaSolid;
