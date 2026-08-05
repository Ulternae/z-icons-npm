import React from 'react';

export interface LanPRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPRegular(props: LanPRegularProps): React.ReactElement;
export default LanPRegular;
