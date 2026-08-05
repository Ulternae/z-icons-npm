import React from 'react';

export interface LanShieldPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldPlusThin(props: LanShieldPlusThinProps): React.ReactElement;
export default LanShieldPlusThin;
