import React from 'react';

export interface LanUserHardHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHardHat(props: LanUserHardHatProps): React.ReactElement;
export default LanUserHardHat;
