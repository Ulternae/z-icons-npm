import React from 'react';

export interface LanPenNibRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenNibRegular(props: LanPenNibRegularProps): React.ReactElement;
export default LanPenNibRegular;
