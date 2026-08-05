import React from 'react';

export interface LanPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusRegular(props: LanPlusRegularProps): React.ReactElement;
export default LanPlusRegular;
