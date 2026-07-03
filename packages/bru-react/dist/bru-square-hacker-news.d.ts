import React from 'react';

export interface BruSquareHackerNewsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareHackerNews(props: BruSquareHackerNewsProps): React.ReactElement;
export default BruSquareHackerNews;
