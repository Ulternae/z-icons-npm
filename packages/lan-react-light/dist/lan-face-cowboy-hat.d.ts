import React from 'react';

export interface LanFaceCowboyHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceCowboyHat(props: LanFaceCowboyHatProps): React.ReactElement;
export default LanFaceCowboyHat;
