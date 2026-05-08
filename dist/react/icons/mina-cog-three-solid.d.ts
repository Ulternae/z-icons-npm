import React from 'react';

export interface MinaCogThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCogThreeSolid: React.FC<MinaCogThreeSolidProps>;
export default MinaCogThreeSolid;
