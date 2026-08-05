import React from 'react';

export interface LanShieldCrossRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldCrossRegular(props: LanShieldCrossRegularProps): React.ReactElement;
export default LanShieldCrossRegular;
