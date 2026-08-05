import React from 'react';

export interface LanImageCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCircleCheckRegular(props: LanImageCircleCheckRegularProps): React.ReactElement;
export default LanImageCircleCheckRegular;
