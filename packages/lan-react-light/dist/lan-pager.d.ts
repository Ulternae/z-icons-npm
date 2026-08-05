import React from 'react';

export interface LanPagerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPager(props: LanPagerProps): React.ReactElement;
export default LanPager;
