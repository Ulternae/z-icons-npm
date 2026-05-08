import React from 'react';

export interface MinaHeartCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartCircleSolid: React.FC<MinaHeartCircleSolidProps>;
export default MinaHeartCircleSolid;
