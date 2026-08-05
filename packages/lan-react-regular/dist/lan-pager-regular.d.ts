import React from 'react';

export interface LanPagerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPagerRegular(props: LanPagerRegularProps): React.ReactElement;
export default LanPagerRegular;
