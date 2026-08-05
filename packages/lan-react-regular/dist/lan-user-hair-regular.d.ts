import React from 'react';

export interface LanUserHairRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHairRegular(props: LanUserHairRegularProps): React.ReactElement;
export default LanUserHairRegular;
