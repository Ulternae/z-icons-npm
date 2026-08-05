import React from 'react';

export interface LanSitemapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSitemapRegular(props: LanSitemapRegularProps): React.ReactElement;
export default LanSitemapRegular;
