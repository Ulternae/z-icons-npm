import React from 'react';

export interface LanPenNibThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenNibThin(props: LanPenNibThinProps): React.ReactElement;
export default LanPenNibThin;
