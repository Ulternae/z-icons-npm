import React from 'react';

export interface MinaPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseSolid: React.FC<MinaPauseSolidProps>;
export default MinaPauseSolid;
