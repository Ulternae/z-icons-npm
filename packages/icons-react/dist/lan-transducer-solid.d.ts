import React from 'react';

export interface LanTransducerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTransducerSolid: React.FC<LanTransducerSolidProps>;
export default LanTransducerSolid;
