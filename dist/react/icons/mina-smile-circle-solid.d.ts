import React from 'react';

export interface MinaSmileCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSmileCircleSolid: React.FC<MinaSmileCircleSolidProps>;
export default MinaSmileCircleSolid;
