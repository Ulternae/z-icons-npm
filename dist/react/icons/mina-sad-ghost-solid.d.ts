import React from 'react';

export interface MinaSadGhostSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSadGhostSolid: React.FC<MinaSadGhostSolidProps>;
export default MinaSadGhostSolid;
