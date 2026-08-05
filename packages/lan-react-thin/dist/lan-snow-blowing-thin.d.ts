import React from 'react';

export interface LanSnowBlowingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowBlowingThin(props: LanSnowBlowingThinProps): React.ReactElement;
export default LanSnowBlowingThin;
