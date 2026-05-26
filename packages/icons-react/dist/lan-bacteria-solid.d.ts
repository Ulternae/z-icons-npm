import React from 'react';

export interface LanBacteriaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacteriaSolid: React.FC<LanBacteriaSolidProps>;
export default LanBacteriaSolid;
