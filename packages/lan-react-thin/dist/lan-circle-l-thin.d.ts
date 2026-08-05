import React from 'react';

export interface LanCircleLThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLThin(props: LanCircleLThinProps): React.ReactElement;
export default LanCircleLThin;
