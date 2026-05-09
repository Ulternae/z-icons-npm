import React from 'react';

export interface MinaRssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRss: React.FC<MinaRssProps>;
export default MinaRss;
