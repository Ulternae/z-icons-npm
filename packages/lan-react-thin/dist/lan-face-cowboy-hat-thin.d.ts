import React from 'react';

export interface LanFaceCowboyHatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceCowboyHatThin(props: LanFaceCowboyHatThinProps): React.ReactElement;
export default LanFaceCowboyHatThin;
