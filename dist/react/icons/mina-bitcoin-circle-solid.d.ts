import React from 'react';

export interface MinaBitcoinCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinCircleSolid: React.FC<MinaBitcoinCircleSolidProps>;
export default MinaBitcoinCircleSolid;
