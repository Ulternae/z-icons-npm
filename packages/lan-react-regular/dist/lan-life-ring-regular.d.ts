import React from 'react';

export interface LanLifeRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLifeRingRegular(props: LanLifeRingRegularProps): React.ReactElement;
export default LanLifeRingRegular;
