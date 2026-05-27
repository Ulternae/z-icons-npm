import React from 'react';

export interface NeoStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStar: React.FC<NeoStarProps>;
export default NeoStar;
