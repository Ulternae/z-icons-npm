import React from 'react';

export interface MinaPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusSolid: React.FC<MinaPlusSolidProps>;
export default MinaPlusSolid;
