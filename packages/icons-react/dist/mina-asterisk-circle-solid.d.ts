import React from 'react';

export interface MinaAsteriskCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskCircleSolid: React.FC<MinaAsteriskCircleSolidProps>;
export default MinaAsteriskCircleSolid;
