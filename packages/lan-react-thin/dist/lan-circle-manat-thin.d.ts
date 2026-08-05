import React from 'react';

export interface LanCircleManatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleManatThin(props: LanCircleManatThinProps): React.ReactElement;
export default LanCircleManatThin;
