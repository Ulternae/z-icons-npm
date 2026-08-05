import React from 'react';

export interface LanUserShieldRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserShieldRegular(props: LanUserShieldRegularProps): React.ReactElement;
export default LanUserShieldRegular;
