import React from 'react';

export interface LanRocketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketThin(props: LanRocketThinProps): React.ReactElement;
export default LanRocketThin;
