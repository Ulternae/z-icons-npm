import React from 'react';

export interface CoreCartShoppingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCartShoppingSolid: React.FC<CoreCartShoppingSolidProps>;
export default CoreCartShoppingSolid;
