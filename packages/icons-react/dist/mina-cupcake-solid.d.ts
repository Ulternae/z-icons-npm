import React from 'react';

export interface MinaCupcakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCupcakeSolid: React.FC<MinaCupcakeSolidProps>;
export default MinaCupcakeSolid;
