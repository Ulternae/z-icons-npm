import React from 'react';

export interface LanCircleHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHRegular(props: LanCircleHRegularProps): React.ReactElement;
export default LanCircleHRegular;
