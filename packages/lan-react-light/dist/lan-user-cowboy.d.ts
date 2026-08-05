import React from 'react';

export interface LanUserCowboyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCowboy(props: LanUserCowboyProps): React.ReactElement;
export default LanUserCowboy;
