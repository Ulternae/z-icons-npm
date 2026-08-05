import React from 'react';

export interface LanPenNibProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenNib(props: LanPenNibProps): React.ReactElement;
export default LanPenNib;
