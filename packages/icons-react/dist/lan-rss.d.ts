import React from 'react';

export interface LanRssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRss: React.FC<LanRssProps>;
export default LanRss;
