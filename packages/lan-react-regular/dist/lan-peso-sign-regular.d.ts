import React from 'react';

export interface LanPesoSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesoSignRegular(props: LanPesoSignRegularProps): React.ReactElement;
export default LanPesoSignRegular;
