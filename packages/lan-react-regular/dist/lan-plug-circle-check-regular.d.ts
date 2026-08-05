import React from 'react';

export interface LanPlugCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleCheckRegular(props: LanPlugCircleCheckRegularProps): React.ReactElement;
export default LanPlugCircleCheckRegular;
