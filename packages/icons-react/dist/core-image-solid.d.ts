import React from 'react';

export interface CoreImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreImageSolid: React.FC<CoreImageSolidProps>;
export default CoreImageSolid;
