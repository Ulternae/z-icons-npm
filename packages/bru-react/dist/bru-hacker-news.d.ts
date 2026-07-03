import React from 'react';

export interface BruHackerNewsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHackerNews(props: BruHackerNewsProps): React.ReactElement;
export default BruHackerNews;
