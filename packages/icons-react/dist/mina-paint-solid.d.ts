import React from 'react';

export interface MinaPaintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPaintSolid: React.FC<MinaPaintSolidProps>;
export default MinaPaintSolid;
