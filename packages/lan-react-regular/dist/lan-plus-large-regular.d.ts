import React from 'react';

export interface LanPlusLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusLargeRegular(props: LanPlusLargeRegularProps): React.ReactElement;
export default LanPlusLargeRegular;
