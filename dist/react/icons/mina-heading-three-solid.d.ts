import React from 'react';

export interface MinaHeadingThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingThreeSolid: React.FC<MinaHeadingThreeSolidProps>;
export default MinaHeadingThreeSolid;
