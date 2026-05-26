import React from 'react';

export interface LanHydraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHydraSolid: React.FC<LanHydraSolidProps>;
export default LanHydraSolid;
