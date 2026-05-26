import React from 'react';

export interface LanOmegaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOmegaSolid: React.FC<LanOmegaSolidProps>;
export default LanOmegaSolid;
