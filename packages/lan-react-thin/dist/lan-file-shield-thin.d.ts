import React from 'react';

export interface LanFileShieldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileShieldThin(props: LanFileShieldThinProps): React.ReactElement;
export default LanFileShieldThin;
