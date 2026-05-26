import React from 'react';

export interface LanBagsShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagsShoppingSolid: React.FC<LanBagsShoppingSolidProps>;
export default LanBagsShoppingSolid;
