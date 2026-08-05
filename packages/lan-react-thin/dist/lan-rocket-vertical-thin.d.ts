import React from 'react';

export interface LanRocketVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketVerticalThin(props: LanRocketVerticalThinProps): React.ReactElement;
export default LanRocketVerticalThin;
