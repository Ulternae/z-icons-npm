import React from 'react';

export interface LanDittoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDittoRegular(props: LanDittoRegularProps): React.ReactElement;
export default LanDittoRegular;
