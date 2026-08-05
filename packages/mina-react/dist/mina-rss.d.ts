import React from 'react';

export interface MinaRssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRss(props: MinaRssProps): React.ReactElement;
export default MinaRss;
