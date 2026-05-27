import React from 'react';

export interface CoreGrid2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGrid2Solid: React.FC<CoreGrid2SolidProps>;
export default CoreGrid2Solid;
