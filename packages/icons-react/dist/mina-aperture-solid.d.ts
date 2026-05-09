import React from 'react';

export interface MinaApertureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaApertureSolid: React.FC<MinaApertureSolidProps>;
export default MinaApertureSolid;
