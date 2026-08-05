import React from 'react';

export interface LanHoneyPotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoneyPotThin(props: LanHoneyPotThinProps): React.ReactElement;
export default LanHoneyPotThin;
