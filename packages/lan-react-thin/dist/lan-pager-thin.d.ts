import React from 'react';

export interface LanPagerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPagerThin(props: LanPagerThinProps): React.ReactElement;
export default LanPagerThin;
