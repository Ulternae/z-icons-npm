import React from 'react';

export interface LanSitemapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSitemap(props: LanSitemapProps): React.ReactElement;
export default LanSitemap;
