import React from 'react';

export interface MinaPizzaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPizzaSolid: React.FC<MinaPizzaSolidProps>;
export default MinaPizzaSolid;
