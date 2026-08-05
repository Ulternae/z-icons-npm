import React from 'react';

export interface LanCircleMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleMinusRegular(props: LanCircleMinusRegularProps): React.ReactElement;
export default LanCircleMinusRegular;
