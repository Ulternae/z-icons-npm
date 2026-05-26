import React from 'react';

export interface LanPizzaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPizzaSolid: React.FC<LanPizzaSolidProps>;
export default LanPizzaSolid;
