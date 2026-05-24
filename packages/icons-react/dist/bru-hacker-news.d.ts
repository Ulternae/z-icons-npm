import React from 'react';

export interface BruHackerNewsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHackerNews: React.FC<BruHackerNewsProps>;
export default BruHackerNews;
