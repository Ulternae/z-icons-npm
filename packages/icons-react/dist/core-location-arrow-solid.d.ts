import React from 'react';

export interface CoreLocationArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLocationArrowSolid: React.FC<CoreLocationArrowSolidProps>;
export default CoreLocationArrowSolid;
