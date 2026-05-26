import React from 'react';

export interface LanSitemapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSitemap: React.FC<LanSitemapProps>;
export default LanSitemap;
