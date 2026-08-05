import React from 'react';

export interface LanShieldPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldPlusRegular(props: LanShieldPlusRegularProps): React.ReactElement;
export default LanShieldPlusRegular;
