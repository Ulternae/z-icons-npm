import React from 'react';

export interface LanSitemapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSitemapThin(props: LanSitemapThinProps): React.ReactElement;
export default LanSitemapThin;
