import React from 'react';

export interface LanUserShieldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserShield(props: LanUserShieldProps): React.ReactElement;
export default LanUserShield;
