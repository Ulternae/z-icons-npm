import React from 'react';

export interface LanCircleSmallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSmall(props: LanCircleSmallProps): React.ReactElement;
export default LanCircleSmall;
