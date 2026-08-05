import React from 'react';

export interface LanUsdCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdCircleRegular(props: LanUsdCircleRegularProps): React.ReactElement;
export default LanUsdCircleRegular;
