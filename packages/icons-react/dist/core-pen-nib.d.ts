import React from 'react';

export interface CorePenNibProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePenNib: React.FC<CorePenNibProps>;
export default CorePenNib;
