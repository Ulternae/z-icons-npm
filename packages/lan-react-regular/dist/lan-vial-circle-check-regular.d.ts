import React from 'react';

export interface LanVialCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialCircleCheckRegular(props: LanVialCircleCheckRegularProps): React.ReactElement;
export default LanVialCircleCheckRegular;
