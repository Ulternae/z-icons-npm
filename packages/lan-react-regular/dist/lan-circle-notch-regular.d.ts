import React from 'react';

export interface LanCircleNotchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNotchRegular(props: LanCircleNotchRegularProps): React.ReactElement;
export default LanCircleNotchRegular;
