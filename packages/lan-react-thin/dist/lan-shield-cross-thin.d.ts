import React from 'react';

export interface LanShieldCrossThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCrossThin(props: LanShieldCrossThinProps): React.ReactElement;
export default LanShieldCrossThin;
