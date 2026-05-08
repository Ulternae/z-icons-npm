import React from 'react';

export interface MinaHeadingOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeadingOneSolid: React.FC<MinaHeadingOneSolidProps>;
export default MinaHeadingOneSolid;
