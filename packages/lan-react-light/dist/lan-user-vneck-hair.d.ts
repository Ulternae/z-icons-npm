import React from 'react';

export interface LanUserVneckHairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVneckHair(props: LanUserVneckHairProps): React.ReactElement;
export default LanUserVneckHair;
