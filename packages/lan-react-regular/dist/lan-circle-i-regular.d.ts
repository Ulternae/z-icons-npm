import React from 'react';

export interface LanCircleIRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleIRegular(props: LanCircleIRegularProps): React.ReactElement;
export default LanCircleIRegular;
