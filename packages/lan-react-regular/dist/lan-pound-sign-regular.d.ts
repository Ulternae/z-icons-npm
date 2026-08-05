import React from 'react';

export interface LanPoundSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoundSignRegular(props: LanPoundSignRegularProps): React.ReactElement;
export default LanPoundSignRegular;
