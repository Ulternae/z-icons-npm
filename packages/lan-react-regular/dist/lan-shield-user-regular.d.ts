import React from 'react';

export interface LanShieldUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldUserRegular(props: LanShieldUserRegularProps): React.ReactElement;
export default LanShieldUserRegular;
