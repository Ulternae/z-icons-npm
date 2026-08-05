import React from 'react';

export interface LanShieldCatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCatRegular(props: LanShieldCatRegularProps): React.ReactElement;
export default LanShieldCatRegular;
