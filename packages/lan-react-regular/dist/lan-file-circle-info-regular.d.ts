import React from 'react';

export interface LanFileCircleInfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleInfoRegular(props: LanFileCircleInfoRegularProps): React.ReactElement;
export default LanFileCircleInfoRegular;
