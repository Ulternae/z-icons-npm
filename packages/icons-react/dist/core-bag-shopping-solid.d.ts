import React from 'react';

export interface CoreBagShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBagShoppingSolid: React.FC<CoreBagShoppingSolidProps>;
export default CoreBagShoppingSolid;
