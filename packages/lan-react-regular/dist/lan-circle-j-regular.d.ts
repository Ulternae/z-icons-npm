import React from 'react';

export interface LanCircleJRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleJRegular(props: LanCircleJRegularProps): React.ReactElement;
export default LanCircleJRegular;
