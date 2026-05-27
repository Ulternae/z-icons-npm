import React from 'react';

export interface CoreLifeRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLifeRingSolid: React.FC<CoreLifeRingSolidProps>;
export default CoreLifeRingSolid;
