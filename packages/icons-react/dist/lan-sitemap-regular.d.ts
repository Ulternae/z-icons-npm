import React from 'react';

export interface LanSitemapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSitemapRegular: React.FC<LanSitemapRegularProps>;
export default LanSitemapRegular;
