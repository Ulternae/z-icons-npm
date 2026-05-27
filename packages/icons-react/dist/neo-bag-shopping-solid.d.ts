import React from 'react';

export interface NeoBagShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBagShoppingSolid: React.FC<NeoBagShoppingSolidProps>;
export default NeoBagShoppingSolid;
