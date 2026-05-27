import React from 'react';

export interface CoreApertureSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreApertureSolid: React.FC<CoreApertureSolidProps>;
export default CoreApertureSolid;
