import React from 'react';

export interface LanPooRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooRegular(props: LanPooRegularProps): React.ReactElement;
export default LanPooRegular;
