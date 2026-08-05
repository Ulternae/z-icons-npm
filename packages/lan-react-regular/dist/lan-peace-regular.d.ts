import React from 'react';

export interface LanPeaceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeaceRegular(props: LanPeaceRegularProps): React.ReactElement;
export default LanPeaceRegular;
