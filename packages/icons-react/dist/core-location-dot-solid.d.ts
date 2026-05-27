import React from 'react';

export interface CoreLocationDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLocationDotSolid: React.FC<CoreLocationDotSolidProps>;
export default CoreLocationDotSolid;
