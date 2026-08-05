import React from 'react';

export interface LanHatCowboyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatCowboyThin(props: LanHatCowboyThinProps): React.ReactElement;
export default LanHatCowboyThin;
