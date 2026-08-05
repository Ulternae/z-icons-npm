import React from 'react';

export interface LanUserHairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHair(props: LanUserHairProps): React.ReactElement;
export default LanUserHair;
