import React from 'react';

export interface CoreFaceFrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceFrownSolid: React.FC<CoreFaceFrownSolidProps>;
export default CoreFaceFrownSolid;
