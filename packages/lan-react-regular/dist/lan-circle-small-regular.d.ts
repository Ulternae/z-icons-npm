import React from 'react';

export interface LanCircleSmallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSmallRegular(props: LanCircleSmallRegularProps): React.ReactElement;
export default LanCircleSmallRegular;
