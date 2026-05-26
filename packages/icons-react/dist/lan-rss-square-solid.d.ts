import React from 'react';

export interface LanRssSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRssSquareSolid: React.FC<LanRssSquareSolidProps>;
export default LanRssSquareSolid;
