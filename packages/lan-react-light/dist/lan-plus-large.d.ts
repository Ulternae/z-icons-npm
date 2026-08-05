import React from 'react';

export interface LanPlusLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusLarge(props: LanPlusLargeProps): React.ReactElement;
export default LanPlusLarge;
