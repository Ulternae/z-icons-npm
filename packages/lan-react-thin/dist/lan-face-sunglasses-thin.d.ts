import React from 'react';

export interface LanFaceSunglassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSunglassesThin(props: LanFaceSunglassesThinProps): React.ReactElement;
export default LanFaceSunglassesThin;
