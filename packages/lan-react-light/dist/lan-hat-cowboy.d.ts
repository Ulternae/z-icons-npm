import React from 'react';

export interface LanHatCowboyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatCowboy(props: LanHatCowboyProps): React.ReactElement;
export default LanHatCowboy;
