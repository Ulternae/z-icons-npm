import React from 'react';

export interface NeoStarHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStarHalf: React.FC<NeoStarHalfProps>;
export default NeoStarHalf;
