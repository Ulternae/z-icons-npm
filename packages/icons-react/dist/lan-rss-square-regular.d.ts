import React from 'react';

export interface LanRssSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRssSquareRegular: React.FC<LanRssSquareRegularProps>;
export default LanRssSquareRegular;
