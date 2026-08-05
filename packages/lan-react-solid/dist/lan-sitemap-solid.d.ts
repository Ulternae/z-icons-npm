import React from 'react';

export interface LanSitemapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSitemapSolid(props: LanSitemapSolidProps): React.ReactElement;
export default LanSitemapSolid;
