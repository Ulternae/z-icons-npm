import React from 'react';

export interface MinaCogOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogOneSolid: React.FC<MinaCogOneSolidProps>;
export default MinaCogOneSolid;
