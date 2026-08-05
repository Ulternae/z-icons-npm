import React from 'react';

export interface LanShieldCatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCat(props: LanShieldCatProps): React.ReactElement;
export default LanShieldCat;
