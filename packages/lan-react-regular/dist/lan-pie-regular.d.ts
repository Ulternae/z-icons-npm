import React from 'react';

export interface LanPieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPieRegular(props: LanPieRegularProps): React.ReactElement;
export default LanPieRegular;
