import React from 'react';

export interface LanSitemapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSitemapThin: React.FC<LanSitemapThinProps>;
export default LanSitemapThin;
