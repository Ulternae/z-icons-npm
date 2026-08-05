import React from 'react';

export interface LanShieldTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldTimesRegular(props: LanShieldTimesRegularProps): React.ReactElement;
export default LanShieldTimesRegular;
