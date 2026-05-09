import React from 'react';

export interface MinaThreeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeCircleSolid: React.FC<MinaThreeCircleSolidProps>;
export default MinaThreeCircleSolid;
