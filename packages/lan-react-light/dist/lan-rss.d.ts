import React from 'react';

export interface LanRssProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRss(props: LanRssProps): React.ReactElement;
export default LanRss;
