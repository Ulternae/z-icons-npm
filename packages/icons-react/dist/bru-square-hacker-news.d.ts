import React from 'react';

export interface BruSquareHackerNewsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareHackerNews: React.FC<BruSquareHackerNewsProps>;
export default BruSquareHackerNews;
