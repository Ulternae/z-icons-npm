import React from 'react';

export interface LanLifeRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLifeRingThin(props: LanLifeRingThinProps): React.ReactElement;
export default LanLifeRingThin;
