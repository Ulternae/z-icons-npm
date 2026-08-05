import React from 'react';

export interface LanUserKeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserKeyRegular(props: LanUserKeyRegularProps): React.ReactElement;
export default LanUserKeyRegular;
