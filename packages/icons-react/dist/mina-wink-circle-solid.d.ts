import React from 'react';

export interface MinaWinkCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinkCircleSolid: React.FC<MinaWinkCircleSolidProps>;
export default MinaWinkCircleSolid;
