import React from 'react';

export interface MinaFemaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFemaleSolid: React.FC<MinaFemaleSolidProps>;
export default MinaFemaleSolid;
