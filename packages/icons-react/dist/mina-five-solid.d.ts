import React from 'react';

export interface MinaFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveSolid: React.FC<MinaFiveSolidProps>;
export default MinaFiveSolid;
