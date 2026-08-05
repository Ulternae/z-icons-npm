import React from 'react';

export interface LanCircleStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleStopRegular(props: LanCircleStopRegularProps): React.ReactElement;
export default LanCircleStopRegular;
