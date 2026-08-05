import React from 'react';

export interface LanBoxCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCircleCheckRegular(props: LanBoxCircleCheckRegularProps): React.ReactElement;
export default LanBoxCircleCheckRegular;
