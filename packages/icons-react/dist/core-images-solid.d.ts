import React from 'react';

export interface CoreImagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreImagesSolid: React.FC<CoreImagesSolidProps>;
export default CoreImagesSolid;
