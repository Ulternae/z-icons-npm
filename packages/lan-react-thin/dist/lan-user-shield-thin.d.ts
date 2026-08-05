import React from 'react';

export interface LanUserShieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserShieldThin(props: LanUserShieldThinProps): React.ReactElement;
export default LanUserShieldThin;
