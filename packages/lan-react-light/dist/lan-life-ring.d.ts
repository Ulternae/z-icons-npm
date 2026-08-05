import React from 'react';

export interface LanLifeRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLifeRing(props: LanLifeRingProps): React.ReactElement;
export default LanLifeRing;
