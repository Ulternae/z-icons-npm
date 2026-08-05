import React from 'react';

export interface LanFaceSunglassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSunglasses(props: LanFaceSunglassesProps): React.ReactElement;
export default LanFaceSunglasses;
