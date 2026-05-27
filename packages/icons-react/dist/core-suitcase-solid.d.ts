import React from 'react';

export interface CoreSuitcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSuitcaseSolid: React.FC<CoreSuitcaseSolidProps>;
export default CoreSuitcaseSolid;
