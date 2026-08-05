import React from 'react';

export interface LanFileCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleCheckRegular(props: LanFileCircleCheckRegularProps): React.ReactElement;
export default LanFileCircleCheckRegular;
