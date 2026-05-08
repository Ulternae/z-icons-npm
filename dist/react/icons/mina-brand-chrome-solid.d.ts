import React from 'react';

export interface MinaBrandChromeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandChromeSolid: React.FC<MinaBrandChromeSolidProps>;
export default MinaBrandChromeSolid;
