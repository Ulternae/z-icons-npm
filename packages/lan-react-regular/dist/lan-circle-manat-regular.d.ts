import React from 'react';

export interface LanCircleManatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleManatRegular(props: LanCircleManatRegularProps): React.ReactElement;
export default LanCircleManatRegular;
