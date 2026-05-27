import React from 'react';

export interface CoreStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreStarSolid: React.FC<CoreStarSolidProps>;
export default CoreStarSolid;
