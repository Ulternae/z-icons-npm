import React from 'react';

export interface LanPagerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPagerSolid(props: LanPagerSolidProps): React.ReactElement;
export default LanPagerSolid;
