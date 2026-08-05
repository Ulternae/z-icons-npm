import React from 'react';

export interface LanShieldMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldMinusRegular(props: LanShieldMinusRegularProps): React.ReactElement;
export default LanShieldMinusRegular;
