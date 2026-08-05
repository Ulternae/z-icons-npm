import React from 'react';

export interface LanShieldHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldHeartThin(props: LanShieldHeartThinProps): React.ReactElement;
export default LanShieldHeartThin;
