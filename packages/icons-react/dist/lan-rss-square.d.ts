import React from 'react';

export interface LanRssSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRssSquare: React.FC<LanRssSquareProps>;
export default LanRssSquare;
