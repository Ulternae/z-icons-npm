import React from 'react';

export interface LanCircleManatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleManat(props: LanCircleManatProps): React.ReactElement;
export default LanCircleManat;
