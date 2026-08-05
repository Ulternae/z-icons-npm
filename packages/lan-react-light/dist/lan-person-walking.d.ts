import React from 'react';

export interface LanPersonWalkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWalking(props: LanPersonWalkingProps): React.ReactElement;
export default LanPersonWalking;
