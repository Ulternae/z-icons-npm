import React from 'react';

export interface MinaFunnyCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFunnyCircleSolid: React.FC<MinaFunnyCircleSolidProps>;
export default MinaFunnyCircleSolid;
