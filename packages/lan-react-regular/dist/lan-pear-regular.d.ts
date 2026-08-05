import React from 'react';

export interface LanPearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPearRegular(props: LanPearRegularProps): React.ReactElement;
export default LanPearRegular;
