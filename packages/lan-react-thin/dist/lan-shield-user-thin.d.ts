import React from 'react';

export interface LanShieldUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldUserThin(props: LanShieldUserThinProps): React.ReactElement;
export default LanShieldUserThin;
