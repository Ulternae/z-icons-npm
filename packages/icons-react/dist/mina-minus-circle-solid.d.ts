import React from 'react';

export interface MinaMinusCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusCircleSolid: React.FC<MinaMinusCircleSolidProps>;
export default MinaMinusCircleSolid;
