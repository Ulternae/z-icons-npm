import React from 'react';

export interface LanBagShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagShoppingSolid: React.FC<LanBagShoppingSolidProps>;
export default LanBagShoppingSolid;
