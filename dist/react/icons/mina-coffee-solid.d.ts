import React from 'react';

export interface MinaCoffeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCoffeeSolid: React.FC<MinaCoffeeSolidProps>;
export default MinaCoffeeSolid;
