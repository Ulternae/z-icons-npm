import React from 'react';

export interface LanSitemapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSitemapSolid: React.FC<LanSitemapSolidProps>;
export default LanSitemapSolid;
