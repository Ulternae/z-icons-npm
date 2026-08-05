import React from 'react';

export interface LanShieldCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCheckThin(props: LanShieldCheckThinProps): React.ReactElement;
export default LanShieldCheckThin;
