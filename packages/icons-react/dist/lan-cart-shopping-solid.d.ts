import React from 'react';

export interface LanCartShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartShoppingSolid: React.FC<LanCartShoppingSolidProps>;
export default LanCartShoppingSolid;
