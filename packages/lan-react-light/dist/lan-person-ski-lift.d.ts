import React from 'react';

export interface LanPersonSkiLiftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSkiLift(props: LanPersonSkiLiftProps): React.ReactElement;
export default LanPersonSkiLift;
