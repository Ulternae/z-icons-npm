import React from 'react';

export interface CoreCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCompassSolid: React.FC<CoreCompassSolidProps>;
export default CoreCompassSolid;
