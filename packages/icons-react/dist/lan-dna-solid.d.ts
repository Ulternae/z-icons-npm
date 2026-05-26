import React from 'react';

export interface LanDnaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDnaSolid: React.FC<LanDnaSolidProps>;
export default LanDnaSolid;
