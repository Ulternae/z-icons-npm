import React from 'react';

export interface LanShieldMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldMinus(props: LanShieldMinusProps): React.ReactElement;
export default LanShieldMinus;
