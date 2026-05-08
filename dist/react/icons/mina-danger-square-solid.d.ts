import React from 'react';

export interface MinaDangerSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerSquareSolid: React.FC<MinaDangerSquareSolidProps>;
export default MinaDangerSquareSolid;
