import React from 'react';

export interface LanUserTieHairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTieHair(props: LanUserTieHairProps): React.ReactElement;
export default LanUserTieHair;
