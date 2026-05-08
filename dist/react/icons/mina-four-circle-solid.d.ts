import React from 'react';

export interface MinaFourCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourCircleSolid: React.FC<MinaFourCircleSolidProps>;
export default MinaFourCircleSolid;
