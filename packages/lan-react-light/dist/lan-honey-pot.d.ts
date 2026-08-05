import React from 'react';

export interface LanHoneyPotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoneyPot(props: LanHoneyPotProps): React.ReactElement;
export default LanHoneyPot;
